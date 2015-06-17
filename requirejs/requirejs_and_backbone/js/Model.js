
/* 第一种方法
define(function(require, exports, module){
    var backbone = require("backbone");
    return backbone.Model;
});
*/


/**
 * 第二种方法
 */
define(["backbone"], function(backbone){
    return backbone.Model;
});


