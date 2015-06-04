

/**
 *
 *  上线的版本，比如合并的操作，define要多出两个参数，第一个参数：当前模块的id, 第二个参数，依赖模块的数组
 *
 */

define("./dist/main", ["module1.js","module2.js"],function(require, exports, module){

    var a = require("module1.js").b;  

    var b = require("module2.js").a;//当引入的是sea下面的模块的时候，那么require执行完结果就是exports

    function show(){
        alert(a);
        alert(b);
    }
    require.async("module2.js", function(){
        alert("模块加载完毕");
    })

    //module是当前模块的相应信息

    console.log(module.id);//模块标识
    console.log(module.uri);//模块的绝对路径
    console.log(module.dependencies);//依赖数组
    console.log(module.exports === exports); //true

    exports.show = show;
});

define("module1.js",[], function(require, exports, module){
    exports.b = 200;
});

define("module2.js",[], function(require, exports, module){
    var a = 100;
    exports.a = a;
});

