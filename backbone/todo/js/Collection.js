define(function(require, exports, module){

    var TodoModel = require("Model");

    var localStorage = require("backbone.localStorage");

    var TodoCollection = require("backbone").Collection.extend({
        model: TodoModel,
        localStorage: new localStorage("todos")
    });

    return TodoCollection;
});