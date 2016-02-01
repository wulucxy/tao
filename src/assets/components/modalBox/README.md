# modalBox

小巧优雅的弹窗插件

## 基本信息
 + 稳定版本：1.0.0
 + 当前维护者：@青铜
 + 依赖模块：
   	+ jquery: ^1.11

## 使用说明


## api

### 1. modalBox插件提供对外接口列表

```
url:      null,           // 当弹窗内容位于页面内部的时候，可以取内容id，class或者异步url
overlay : true,           // 是否支持overlay遮罩，默认为true
closeByOverlay:true,      // 点击遮罩是否关闭弹窗，默认为true
klass : false,            // 给弹窗内容容器可以自定义class，默认不添加
effect  : 'fadein',       // 弹窗出现的动画，默认渐隐
closeBtn : '.btn-close',  // 关闭弹窗触发元素
zIndex :  9999,           // 弹窗层优先级
width : null,             // 弹窗宽度
speed : 250,              // 弹窗出现动画事件
overlayBg : '#000',       // 遮罩颜色
error : '元素不存在，请重新选择',
startCallback : null,   //渲染页面元素前回调方法
completeCallback : null, //页面渲染完毕回调方法
beforeCloseCallback : null, //关闭前回调方法
closeCallback : null, //关闭后的回调
customCallback : null //自定义事件监听方法

```

### 2. modalBox扩展confirm和alert方法

#### 使用方法：
> 全局执行，_alert("str")，_confirm("str")即可。

```
api参考：
_confirm(str,option)

str: `String`
option : `Object`
  + callback    : 点击确认触发的回调方法
  + cancelcallback ： 点击取消触发的回调
  + customCallback ： 自定义回调方法
  + closeCallback ： 关闭的回调方法

```

