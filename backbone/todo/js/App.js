define(function(require, exports, module){
    
    var todoModel = new require("Model");
    var todoLists = new require("Collection");

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
            $(e.target).val("");
        },

        clearCompleted: function(e){
            console.log("App View: clearCompleted");
        },

        toggleAllComplete: function(e){

            var done = e.target.checked;

            console.log("App View: toggleAllComplete");
            console.log(checked);

            todoLists.each(function(model) {
                model.save({
                    "done": done
                });
            });
        }
    });

    new AppView;
});