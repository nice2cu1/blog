---
title: 消防安全学习平台
date: 2022-11-15
---

仍是一次抓包、重放记录
<!--more-->

本方法仅适用于iOS端

过程中使用的软件：HTTP Catcher(网球)、API Tester

- HTTP Catcher并不是定性要求，只需解密https流量的抓包软件即可，API Tester同样并非定性要求。

[![软件预览](https://s1.ax1x.com/2022/11/15/zVkhRA.jpg)](https://imgse.com/i/zVkhRA)



## 已知

- 可直接获得的积分为 **选读文章**、**视音频学习**、**视音频时长** 分别为**2分**、**6分**、**4分**。

- 平台走的HTTPS流量，需要抓包软件支持解密HTTPS。


## 准备

- 打开HTTP Catcher，启用**解密HTTPS流量**。

>*期间会安装证书、信任证书，方法不在此过多赘述。*

[![解密HTTPS流量](https://s1.ax1x.com/2022/11/15/zV33HH.jpg)](https://imgse.com/i/zV33HH)

- 点击底部电源按钮启用抓包。

>*请确保学习平台处于打开状态，避免抓取到不必要的数据。*

[![抓包按钮](https://s1.ax1x.com/2022/11/15/zV3sEj.jpg)](https://imgse.com/i/zV3sEj)


- 点击**选读文章**、**视音频学习**、**视音频时长**中任意一项进行浏览，直到积分增加，返回HTTP Catcher关闭抓包。
    
>*期间请尽量关闭联网应用，减少无关数据的抓取*

## 数据重放
+ 在抓取到的数据中找到与图示圈中处相似的链接（包含 taskScord）
[![taskScord](https://s1.ax1x.com/2022/11/15/zV3OxK.jpg)](https://imgse.com/i/zV3OxK)

- 右滑该项，导出cURL
[![cURL](https://s1.ax1x.com/2022/11/15/zV8SVH.jpg)](https://imgse.com/i/zV8SVH)
+ 导入至API Tester
[![Import](https://s1.ax1x.com/2022/11/15/zV80Rx.jpg)](https://imgse.com/i/zV80Rx)
- 导入后，右上角直接运行该请求
[![运行按钮](https://s1.ax1x.com/2022/11/15/zV8cee.jpg)](https://imgse.com/i/zV8cee)
+ 运行后，如果不出意外，将会返回类似于以下数据
```json
{
  "result": "2",
  "msg": "succ",
  "code": 1001
}

```
> **提示：**
> + **result**对应的值便代表着相应的分数，文中示例链接便是阅读文章的积分领取链接。
>
> - 若出现 **token失效** 字样则代表需要重新抓包，以便于获取新的token来发送请求。
>
> + 导入API Tester的链接可反复运行，直到出现 **你已领取过该任务** 字样，这代表着该项积分已达当日上限。
>
至此，领取积分的流程便结束，本文仅展示了**选读文章**积分的领取方式，其他两种可以使用同样的方法进行领取。

### 文章仅供学习交流