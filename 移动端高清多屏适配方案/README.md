
# 背景

- 开发移动端H5页面
- 面对不同分辨率的手机
- 面对不同屏幕尺寸的手机

# 视觉稿

- 首先，选取一款手机的屏幕宽高作为基准(以前是iphone4的320×480，现在更多的是iphone6的375×667)。
- 对于retina屏幕(如: dpr=2)，为了达到高清效果，视觉稿的画布大小会是基准的2倍，也就是说像素点个数是原来的4倍（对iphone6而言：原先的375×667，就会变成750×1334）

### 对于dpr=2的手机，为什么画布大小×2，就可以解决高清问题？
### 对于2倍大小的视觉稿，在具体的css编码中如何还原每一个区块的真实宽高(也就是布局问题)?

# 一些概念

### 物理像素(physical pixel)

一个物理像素是显示器(手机屏幕)上最小的物理显示单元，在操作系统的调度下，每一个设备像素都有自己的颜色值和亮度值。


### 设备独立像素(density-independent pixel)

设备独立像素(也叫密度无关像素)，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，然后由相关系统转换为物理像素。


### 设备像素比(device pixel ratio )

设备像素比 = 物理像素 / 设备独立像素(device-independent pixels dips) // 在某一方向上，x方向或者y方向


```
    javascript中，可以通过window.devicePixelRatio获取到当前设备的dpr。
    css中，可以通过-webkit-device-pixel-ratio, -webkit-min-device-pixel-ratio , -webkit-max-device-pixel-ratio 进行媒体查询
```

#### 当页面设置了 ```<meta name="viewport" content="width=device-width">```时候，```document.documentElement.clientWidth```在大部分浏览器下，得到的是布局视区的宽度，等同于dips的宽度。

#### 对于screen.width的值：

- 在iOS视网膜设备上，screen.width返回dips宽。因此，在竖着显示的时候，视网膜显示屏的ipad和非视网膜显示屏的ipad返回的都是768.

- 在Android设备( Nexus One, Galaxy Nexus, Galaxy Note )上，screen.width返回的是物理像素宽度，分别480, 720, 和800. 该设备上的所有浏览器都是该值。

----
