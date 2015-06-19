define(function(require, exports, module){

    // var Backbone = require("backbone");

    // var Model = Backbone.Model.extend({
    //     //urlRoot:"test.php",
    //     defaults: {
    //         title:"aaa"
    //     }
    // });

    // var Collection = Backbone.Collection.extend({
    //     url:"/notes",
    //     model: Model
    // });

    // var c = new Collection;

    // c.create({
    //     title:"aaa"
    // });

    var TodoCollection = require("Collection");

    var TodoModel = require("Model");

    var todoLists = new TodoCollection;

    var AppView = require("backbone").View.extend({
        el: $("#todo"),
        //statsTemplate: _.template($("#status-template").html()),
        events: {
            "keypress header input": "createOnEnter",
            "click footer div": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
        },

        createOnEnter: function(e){

            if(e.keyCode != 13) return;
            if (!$(e.target).val()) return;

            console.log("App View: createOnEnter");
            console.log("data: "+ $(e.target).val());

            /*  需要请求网络保存
            todoLists.create({
                "title": $(e.target).val()
            });
            */

            // 不需要请求网络
            todoLists.add( new TodoModel({"title": $(e.target).val()}));

            //清除
            $(e.target).val("");
        },

        clearCompleted: function(e){
            console.log("App View: clearCompleted");
        },

        toggleAllComplete: function(e){

            var done = e.target.checked;

            console.log("App View: toggleAllComplete");
            console.log(done);

            todoLists.each(function(model) {
                model.save({
                    "done": done
                });
            });
        }
    });

    new AppView;
});