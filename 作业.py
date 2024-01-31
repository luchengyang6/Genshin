# 1.基础设置
from machine import Pin, PWM
import time

eng1 = PWM(Pin(27), Pin.OUT)
eng2 = PWM(Pin(26), Pin.OUT)
servo = PWM(Pin(15), Pin.OUT)
eng1.freq(100)
eng2.freq(100)
servo.freq(100)
led1 = PWM(Pin(32))
led1.freq(1000)
led2 = PWM(Pin(33))
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
