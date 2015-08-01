/**
 * Created by Jaylee on 15/7/30.
 */

/**
 * worker运行环境：
 *  navgator: appName, appVersion, userAgent, platform
 *  location: 所有的属性都是只读的
 *  self:  指向全局的worker对象
 *  所有的ECMA对象： Object, Array, Date等
 *  XMLHttpRequest
 *  setTimeout  setInterval
 *  close();    立刻停止worker运行
 *  importScripts 方法
 *
 */


self.onmessage = function(ev){
    console.log(ev.data);
    console.log(navigator);

    self.postMessage("这是从worker传过来的数据:"+ev.data);
}