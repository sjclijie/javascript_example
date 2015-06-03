

define(function(require, exports, module){

    require("./module2.js");  

    var b = require("./module3.js").b;//当引入的是sea下面的模块的时候，那么require执行完结果就是exports

    function show(){
        alert(a);
        alert(b);
    }

    exports.show = show;
});



var a = 100;
define(function(require, exports, module){
    exports.b = 200;
});