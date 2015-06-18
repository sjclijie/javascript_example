define(function(require, exports, module){

    var View = require("backbone").View;

    return View.extend({
        defaults: function(){
            return {
                title: "empty todo..."
            };
        }
    });
});