define(function(require, exports, module){

    var TodoModel = require("Model");

    var TodoCollection = require("backbone").Collection.extend({
        model: TodoModel
    });

    return TodoCollection;
});