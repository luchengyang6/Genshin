#本代码建议在上位机运行
#在最后附上实验数据MyData.txt

import math
import matplotlib.pyplot as plt
import numpy as np
from scipy.spatial.transform import Rotation

# MyData.txt对于数据格式有一定要求，按照：
# 时间，真实位移x，真实位移y，真实位移z，真实四元数qx，真实四元数qx，真实四元数qx，真实四元数qx，测量加速度x，测量加速度y，测量加速度z，测量角速度x，测量角速度y，测量角速度z
# 的顺序
raw_data = []  # 创建空列表用于实例化
with open("MyData.txt", "r") as f:
    for line in f.readlines():
        line = line.strip('\n')
        data = line.split('\n\t')
        for str in data:  # 遍历分割后的每个字符串
            sub_str = str.split(' ')
        if sub_str:  # 如果分割后的字符串非空
            raw_data.append(sub_str)  # 将分割后的字符串添加到raw_data列表中

raw_data = np.array(raw_data).astype(float)  # 将raw_data转换为numpy数组，并将数据类型转换为float类型
print(type(raw_data))  # raw_data的数据类型
print(raw_data.shape)  # raw_data的形状

PoseTrue = raw_data[:, 0:8]  # 提取raw_data中第0列到第7列的数据作为PoseTrue
IMURaw = raw_data[:, 8:14]  # 提取raw_data中第8列到第13列的数据作为IMURaw

def Integration(PoseTrue, VelInit, IMU):  # 定义Integration函数
    # Position
    InitPos = PoseTrue[0][1:4]  # 提取初始位置信息
    # quaternion
    InitQuat = PoseTrue[0][4:8]  # 提取初始四元数信息
    print(InitQuat.shape)  # 打印初始四元数的形状
    # quat -> euler
    InitEuler = Rotation.from_quat(InitQuat).as_euler('zyx')  # 将初始四元数转换为欧拉角
    # attitude angles
    phi = np.zeros((len(IMU), 1))  # 创建存储姿态角phi的数组
    theta = np.zeros((len(IMU), 1))  # 创建存储姿态角theta的数组
    psi = np.zeros((len(IMU), 1))  # 创建存储姿态角psi的数组
    C_ned2b = np.zeros((len(IMU), 3, 3))  # 创建存储NED到body转换矩阵的数组
    C_b2ned = np.zeros((len(IMU), 3, 3))  # 创建存储body到NED转换矩阵的数组
    Pos = np.zeros((len(IMU), 3))  # 存储位置信息
    Vel = np.zeros((len(IMU), 3))  # 存储速度信息
    time_s = PoseTrue[:, 0]  # 提取时间信息
    print(time_s)

    phi[0] = InitEuler[2]
    theta[0] = InitEuler[1]
    psi[0] = InitEuler[0]
    Pos[0] = InitPos  # 设置初始位置
    Vel[0] = VelInit  # 设置初始速度
    print(Vel)
    # return value
    Rtn = np.zeros((len(IMU), 6))  # 创建返回结果数组
    for i in range(len(IMURaw) - 1):  # 遍历IMU数据
        dt = time_s[i + 1] - time_s[i]  # 计算时间间隔
        # preparation
        C11 = math.cos(theta[i]) * math.cos(psi[i])
        C12 = math.cos(theta[i]) * math.sin(psi[i])
        C13 = -math.sin(theta[i])
        C21 = math.sin(phi[i]) * math.sin(theta[i]) * math.cos(psi[i]) - math.cos(phi[i]) * math.sin(psi[i])
        C22 = math.sin(phi[i]) * math.sin(theta[i]) * math.sin(psi[i]) + math.cos(phi[i]) * math.cos(psi[i])
        C23 = math.sin(phi[i]) * math.cos(theta[i])
        C31 = math.cos(phi[i]) * math.sin(theta[i]) * math.cos(psi[i]) + math.sin(phi[i]) * math.sin(psi[i])
        C32 = math.cos(phi[i]) * math.sin(theta[i]) * math.sin(psi[i]) - math.sin(phi[i]) * math.cos(psi[i])
        C33 = math.cos(phi[i]) * math.cos(theta[i])
        C_ned2b[i] = np.matrix([
            [C11, C12, C13],
            [C21, C22, C23],
            [C31, C32, C33]
        ])  # 构建NED到body转换矩阵
        C_b2ned[i] = C_ned2b[i].transpose()  # 计算body到NED转换矩阵
        C_bodyrate2eulerdot = np.matrix([
            [1, math.sin(phi[i]) * math.tan(theta[i]), math.cos(phi[i]) * math.tan(theta[i])],
            [0, math.cos(phi[i]), -math.sin(phi[i])],
            [0, math.sin(phi[i]) / math.cos(theta[i]), math.cos(phi[i]) / math.cos(theta[i])]
        ])  # 计算body转换到欧拉角速度的矩阵
        # IMU
        wx = IMU[i][3]
        wy = IMU[i][4]
        wz = IMU[i][5]
        fx = IMU[i][0]
        fy = IMU[i][1]
        fz = IMU[i][2]
        vGyro = np.matrix([
            [wz],
            [-wy],
            [wx]
        ])  # 构建角速度矩阵
        vAcc = np.matrix([
            [fz],
            [-fy],
            [fx]
        ])  # 构建加速度矩阵
        vG = np.matrix([
            [0],
            [0],
            [9.82]
        ])  # 构建重力加速度矩阵
        dot_atti = np.dot(C_bodyrate2eulerdot, vGyro)  # 计算欧拉角速度
        acc_n = np.dot(C_b2ned[i], vAcc).astype(float) - vG.astype(float)  # 计算NED坐标系下的加速度
        Pos[i + 1] = Pos[i] + Vel[i] * dt + 0.5 * acc_n.A.squeeze() * dt * dt  # 对姿态进行简单积分
        Vel[i + 1] = Vel[i] + acc_n.A.squeeze() * dt  # 对速度简单积分
        atti_last = np.array([phi[i], theta[i], psi[i]])  # 获取上一时刻的姿态角
        atti_next = atti_last + dot_atti * dt  # 更新姿态角
        phi[i + 1] = atti_next[0]  # 更新phi
        theta[i + 1] = atti_next[1]  # 更新theta
        psi[i + 1] = atti_next[2]  # 更新psi

    Rtn[:, 0:3] = Pos  # 将位置信息存入返回数组
    Rtn[:, 3] = phi.squeeze()  # 将phi存入返回数组
    Rtn[:, 4] = theta.squeeze()  # 将theta存入返回数组
    Rtn[:, 5] = psi.squeeze()  # 将psi存入返回数组
    return Rtn  # 返回结果数组

v0 = np.zeros((1,3))  # 创建初始速度数组
print(v0)  # 打印初始速度数组
result = Integration(PoseTrue, v0, IMURaw)  # 调用Integration函数

fig = plt.figure()  # 创建绘图窗口
ax = fig.add_subplot(111, projection='3d')  # 添加3D坐标轴
ax.plot(result[:, 0], result[:, 1], result[:, 2])  # 绘制曲线
ax.set_xlabel('X')  # 设置X轴标签
ax.set_ylabel('Y')
ax.set_zlabel('Z')
plt.show()


# MyData.txt
#0.000000000 -0.982430570 0.462775503 1.440096452 0.017048921 0.017442947 0.999681640 0.006457347 9.128356708 0.106238708 -2.606934458 0.094945911 0.020245819 0.058643063
#0.010116100 -0.982516322 0.462718628 1.440084893 0.016769881 0.016830918 0.999696135 0.006567209 9.398039583 1.618097250 -2.705000958 -0.011170107 0.027925268 0.069813170
#0.020016193 -0.982455216 0.462720566 1.440119365 0.017149872 0.017305289 0.999682528 0.006422704 8.989429167 -0.130755333 -2.713173167 -0.092153385 0.036302848 0.078888882
#0.030037880 -0.982471853 0.462759382 1.440067216 0.016636406 0.016787754 0.999699626 0.006485327 9.299973083 -1.234003458 -2.476179125 -0.005585054 0.009075712 0.113795467
#0.039942741 -0.982428366 0.462761779 1.440089186 0.017071389 0.017441812 0.999681696 0.006392007 9.275456458 0.073549875 -2.582417833 0.061435590 0.023736478 0.091455253
#0.050014973 -0.982485600 0.462756273 1.440062406 0.016627783 0.016859991 0.999698348 0.006516953 9.471589458 0.400438208 -2.606934458 0.009773844 0.028623400 0.060039326
#0.060015678 -0.982469652 0.462743111 1.440121145 0.017145077 0.017273791 0.999682861 0.006468433 9.332661917 0.122583125 -2.705000958 -0.032114058 0.042586034 0.086568331
#0.069996595 -0.982430145 0.462763755 1.440059984 0.017014370 0.017147056 0.999688199 0.006324076 9.659550250 -0.375921583 -2.917478375 -0.030717795 0.041887902 0.094945911
#0.080028534 -0.982400129 0.462789534 1.440090802 0.017226939 0.017420019 0.999680099 0.006282920 9.291800875 -0.490332500 -2.598762250 -0.000698132 0.024434610 0.077492619
#0.090289354 -0.982467627 0.462647409 1.440103708 0.016840361 0.017015106 0.999695012 0.006064004 9.447072833 -0.098066500 -2.655967708 0.032812190 0.008377580 0.075398224


