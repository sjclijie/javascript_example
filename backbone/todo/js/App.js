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

    var TodoView = require("View");

    var todoLists = new TodoCollection;

    var AppView = require("backbone").View.extend({

        el: $("#todo"),

        statsTemplate: _.template($("#stats-template").html()),

        events: {
            "keypress header input": "createOnEnter",
            "click footer div": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
        },

        //初始化，监听model
        initialize: function(){
            this.listenTo(todoLists, "add", this.addOne);
            this.listenTo(todoLists, "all", this.render);

            this.mainContent = $("#todo section");
            this.footer = $("#todo footer");
            this.itemUl = $("#todo section ul");

            this.render();
        },

        render: function(){

            console.log("App View: render");

            if (todoLists.length > 0 ){

                this.mainContent.show();
                this.footer.show();

                this.footer.html(this.statsTemplate({
                    remaining: 1
                }));

            } else {
                this.mainContent.hide();
                this.footer.hide();
            }
        },

        addOne: function(todo){

            console.log("App View: addOne");

            var view = new TodoView({
                model: todo
            });

            console.log(view.render().el);

            this.itemUl.append(view.render().el);
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