define(function(require, exports, module){

    var Model = require("backbone").Model;

    var TodoModel = Model.extend({
        defaults: {
            "title":"empty todo...",
            "done": false
        },
        toggle: function(){
            this.save({
                done: !this.get("done")
            });
        }
    });

    return TodoModel;
});