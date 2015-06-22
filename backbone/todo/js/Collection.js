define(function(require, exports, module){

    var TodoModel = require("Model");

    //var localStorage = require("backbone.localStorage");

    var TodoCollection = require("backbone").Collection.extend({
        url:"save.php",
        model: TodoModel,
        remaining: function(){
            return this.where({
                done: false
            });
        },
        done: function(){
            return this.where({
                done: true
            });
        }
        //localStorage: new localStorage("todos")
    });

    return TodoCollection;
});