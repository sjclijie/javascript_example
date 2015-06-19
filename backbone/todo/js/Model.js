define(function(require, exports, module){

    var Model = require("backbone").Model;

    var TodoModel = Model.extend({
        defaults: {
            "title":"empty todo..."
        }
    });

    return TodoModel;
});