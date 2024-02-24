import network
import socket
import _thread
import machine
import time
from math import sqrt, atan2
from machine import Pin, SoftI2C, PWM
from time import sleep_ms

Watcher = Pin(5, Pin.IN, Pin.PULL_UP)  # 初始设置
eng1 = PWM(Pin(27), Pin.OUT)
eng2 = PWM(Pin(26), Pin.OUT)
servo = PWM(Pin(15), Pin.OUT)
led1 = PWM(Pin(32))
led2 = PWM(Pin(33))

# 联网
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
if not wlan.isconnected():
    print('connecting to network...')
    wlan.connect('', '') # 输入wifi名及密码
    i = 1
    while not wlan.isconnected():
        print("正在链接...{}".format(i))
        i += 1
        time.sleep(1)
print('network config:', wlan.ifconfig())
#绑定服务器IP和端口
client_s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_s.connect(('192.168.1.51', 1145))


# 线程1：获取速度
def get_speed(*args, **kuargs):
    count = 0  # 计数器初始值
    while True:
        for i in range(40):
            if Watcher.value() == 0:
                count += 1
            time.sleep(0.03)  # 暂停30毫秒

        huansuan = count * -0.2 + 9#  换算速度
        speed=int(huansuan)# 取整
        send_content = ",".join([
            '速度:',
            str(speed),
            'cm/s'
        ])
        client_s.send(send_content.encode("utf-8"))#  上传数据
        count=0   #  计数器归零，用于下一次计算


# 线程2：小车行进
def xiaochexingjin(*args, **kuargs):
    # 1.基础设置

    eng1.freq(100)
    eng2.freq(100)
    servo.freq(100)
    led1.freq(1000)
    led2.freq(1000)

    # 2.调试阶段(实验代码)
    servo.duty(156)  # 此为平直前进时舵机的duty,也用于初始化调整角度
    # 以下为调试代码，用于角度复位与转弯所需角度调整：
    # time.sleep(1)
    # servo.duty(240)
    # time.sleep(1)
    # servo.duty(40)
    # time.sleep(1)
    # servo.duty(120)

    # 3.主程序
    while True:
        # 当eng2.duty > eng1.duty 时，小车前进，反之则后退
        eng1.duty(6)
        # 加速阶段
        for i in range(6, 1000, 60):
            eng2.duty(i)
            time.sleep_ms(585)
        servo.duty(40)
        # 减速阶段(后匀速运动) (上同时附带转弯)      　
        for j in range(1023, 415, -43):
            eng2.duty(j)
            time.sleep_ms(470)
        servo.duty(156)
        break
    # 匀速走一段直线(便于调整倒车角度使之完美入库)
    time.sleep_ms(7450)

    # 倒车入库
    while 1:
        #     倒车提示————亮灯
        led2.duty(1023)
        eng1.duty(666)
        eng2.duty(6)
        servo.duty(40)
        time.sleep(5)
        servo.duty(156)
        time.sleep_ms(3500)
        eng2.duty(666)
        time.sleep(4)
        break

    # 出库

    while 1:
        # 出库提示————亮灯
        led1.duty(1023)
        eng1.duty(6)
        eng2.duty(666)
        time.sleep_ms(2700)
        servo.duty(40)
        time.sleep_ms(5300)
        servo.duty(156)
        eng2.duty(6)
        eng1.duty(666)
        time.sleep_ms(2300)

        eng1.duty(6)
        eng2.duty(666)
        servo.duty(40)
        time.sleep_ms(7200)
        eng1.duty(6)
        eng2.duty(666)
        servo.duty(156)
        time.sleep(5)
        eng1.duty(666)
        eng2.duty(666)
        break


# 线程3：获取姿态
def get_attitude(*args, **kuargs):


    error_msg = "\n错误 \n"
    i2c_err_str = "ESP32 无法与地址为0x{:02X}的模块进行交流, 请检查连接"

    # 定义重力加速度
    _GRAVITIY_MS2 = 9.80665

    # 标度修饰符（将原始数据乘或除以该数值以获得大小更贴合实际的数据）
    _ACC_SCLR_2G = 16384.0
    _ACC_SCLR_4G = 8192.0
    _ACC_SCLR_8G = 4096.0
    _ACC_SCLR_16G = 2048.0

    _GYR_SCLR_250DEG = 131.0
    _GYR_SCLR_500DEG = 65.5
    _GYR_SCLR_1000DEG = 32.8
    _GYR_SCLR_2000DEG = 16.4

    # 提前定义好的范围
    _ACC_RNG_2G = 0x00
    _ACC_RNG_4G = 0x08
    _ACC_RNG_8G = 0x10
    _ACC_RNG_16G = 0x18

    _GYR_RNG_250DEG = 0x00
    _GYR_RNG_500DEG = 0x08
    _GYR_RNG_1000DEG = 0x10
    _GYR_RNG_2000DEG = 0x18

    # MPU-6050寄存器
    _PWR_MGMT_1 = 0x6B

    _ACCEL_XOUT0 = 0x3B

    _GYRO_XOUT0 = 0x43

    _ACCEL_CONFIG = 0x1C
    _GYRO_CONFIG = 0x1B

    _maxFails = 3

    # 设定地址
    _MPU6050_ADDRESS = 0x68

    def signedIntFromBytes(x, endian="big"):
        y = int.from_bytes(x, endian)
        if (y >= 0x8000):
            return -((65535 - y) + 1)
        else:
            return y

    class MPU6050(object):
        def __init__(self, bus=None, freq=None, sda=None, scl=None, addr=_MPU6050_ADDRESS):
            # 检验I2C通信协议是否出错
            self._failCount = 0
            self._terminatingFailCount = 0

            # ESP32针对I2C进行初始化
            # 接口:
            # SCL -> GPIO 22
            # SDA -> GPIO 21
            self.i2c = SoftI2C(scl=Pin(22), sda=Pin(21), freq=100000)

            self.addr = addr
            try:
                # 唤醒MPU-6050
                self.i2c.writeto_mem(self.addr, _PWR_MGMT_1, bytes([0x00]))
                sleep_ms(5)
            except Exception as e:
                print(i2c_err_str.format(self.addr))
                print(error_msg)
                raise e
            self._accel_range = self.get_accel_range(True)
            self._gyro_range = self.get_gyro_range(True)

        def _readData(self, register):
            failCount = 0
            while failCount < _maxFails:
                try:
                    sleep_ms(10)
                    data = self.i2c.readfrom_mem(self.addr, register, 6)
                    break
                except:
                    failCount = failCount + 1
                    self._failCount = self._failCount + 1
                    if failCount >= _maxFails:
                        self._terminatingFailCount = self._terminatingFailCount + 1
                        print(i2c_err_str.format(self.addr))
            x = signedIntFromBytes(data[0:2])
            y = signedIntFromBytes(data[2:4])
            z = signedIntFromBytes(data[4:6])
            return {"x": x, "y": y, "z": z}

            # 设定加速度传感器的范围

        # accel_range : the range to set the accelerometer to. Using a pre-defined range is advised.
        def set_accel_range(self, accel_range):
            self.i2c.writeto_mem(self.addr, _ACCEL_CONFIG, bytes([accel_range]))
            self._accel_range = accel_range

        # 获取加速度范围
        # raw=True: Returns raw value from the ACCEL_CONFIG register
        # raw=False: Return integer: -1, 2, 4, 8 or 16. When it returns -1 something went wrong.
        def get_accel_range(self, raw=False):
            # 获取原始数据
            raw_data = self.i2c.readfrom_mem(self.addr, _ACCEL_CONFIG, 2)

            if raw is True:
                return raw_data[0]
            elif raw is False:
                if raw_data[0] == _ACC_RNG_2G:
                    return 2
                elif raw_data[0] == _ACC_RNG_4G:
                    return 4
                elif raw_data[0] == _ACC_RNG_8G:
                    return 8
                elif raw_data[0] == _ACC_RNG_16G:
                    return 16
                else:
                    return -1

        # 读取并显示各方向上的加速度
        # 显示库中数据，单位为 g (g=True) 或 m/s^2 (g=False)
        def read_accel_data(self, g=False):
            accel_data = self._readData(_ACCEL_XOUT0)
            accel_range = self._accel_range
            scaler = None
            if accel_range == _ACC_RNG_2G:
                scaler = _ACC_SCLR_2G
            elif accel_range == _ACC_RNG_4G:
                scaler = _ACC_SCLR_4G
            elif accel_range == _ACC_RNG_8G:
                scaler = _ACC_SCLR_8G
            elif accel_range == _ACC_RNG_16G:
                scaler = _ACC_SCLR_16G
            else:
                print("Unkown range - scaler set to _ACC_SCLR_2G")
                scaler = _ACC_SCLR_2G

            x = accel_data["x"] / scaler
            y = accel_data["y"] / scaler
            z = accel_data["z"] / scaler

            if g is True:
                return {"x": x, "y": y, "z": z}
            elif g is False:
                x = x * _GRAVITIY_MS2 + 0.6
                y = y * _GRAVITIY_MS2 + 0.1
                z = z * _GRAVITIY_MS2 - 10.0
                return {"x": x, "y": y, "z": z}

        def read_accel_abs(self, g=False):
            d = self.read_accel_data(g)
            return sqrt(d["x"] ** 2 + d["y"] ** 2 + d["z"] ** 2)

        def set_gyro_range(self, gyro_range):
            self.i2c.writeto_mem(self.addr, _GYRO_CONFIG, bytes([gyro_range]))
            self._gyro_range = gyro_range

        #
        # 获取陀螺仪（测倾角）设定范围
        # raw=True: 显示原始数据
        # raw=False: 显示单位为度/秒的数据
        def get_gyro_range(self, raw=False):
            # 获取原始数据
            raw_data = self.i2c.readfrom_mem(self.addr, _GYRO_CONFIG, 2)

            if raw is True:
                return raw_data[0]
            elif raw is False:
                if raw_data[0] == _GYR_RNG_250DEG:
                    return 250
                elif raw_data[0] == _GYR_RNG_500DEG:
                    return 500
                elif raw_data[0] == _GYR_RNG_1000DEG:
                    return 1000
                elif raw_data[0] == _GYR_RNG_2000DEG:
                    return 2000
                else:
                    return -1

        # 读取并显示陀螺仪数据
        def read_gyro_data(self):
            gyro_data = self._readData(_GYRO_XOUT0)
            gyro_range = self._gyro_range
            scaler = None
            if gyro_range == _GYR_RNG_250DEG:
                scaler = _GYR_SCLR_250DEG
            elif gyro_range == _GYR_RNG_500DEG:
                scaler = _GYR_SCLR_500DEG
            elif gyro_range == _GYR_RNG_1000DEG:
                scaler = _GYR_SCLR_1000DEG
            elif gyro_range == _GYR_RNG_2000DEG:
                scaler = _GYR_SCLR_2000DEG
            else:
                print("范围未知 - 修饰符已设置为 _GYR_SCLR_250DEG")
                scaler = _GYR_SCLR_250DEG

            x = gyro_data["x"] / scaler
            y = gyro_data["y"] / scaler
            z = gyro_data["z"] / scaler

            return {"x": x, "y": y, "z": z}

        def read_angle(self):  # 返回数据单位为弧度
            a = self.read_gyro_data()
            x = atan2(a["y"], a["z"])
            y = atan2(-a["x"], a["z"])
            return {"x": x, "y": y}

        while True:
            print(MPU6050().read_accel_data())
            print(MPU6050().read_accel_abs())
            print(MPU6050().read_angle())
            time.sleep(1)
            # 创建发送内容
            send_content = ",".join([
                '加速度',
                str(MPU6050().read_accel_data()),
                '总加速度',
                str(MPU6050().read_accel_abs()),
                '姿态',
                str(MPU6050().read_angle())
            ])

            client_s.send(send_content.encode("utf-8"))

# 创建多线程
thread_1 = _thread.start_new_thread(get_speed, (1,))

thread_2 = _thread.start_new_thread(xiaochexingjin, (2,))

thread_3 = _thread.start_new_thread(get_attitude, (3,))

while True:
    print(" ")
    time.sleep(20)


