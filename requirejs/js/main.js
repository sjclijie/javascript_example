define(function(require, exports, module){

    var test = require("./test.js");
    var selector = require("./selector");

    console.log(require);

    console.log(exports);

    exports.hello = function(){
        console.log("bbbb");
    }

    console.log(module);

    test.test();

    console.log(selector);
});
