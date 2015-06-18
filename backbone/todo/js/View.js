define(function(require, exports, module){

    var _ = require("underscore");
    var $ = require("jquery");

    var TodoView = require("backbone").View.extend({
        
        tempalte: _.template($("#item-template").html()),

        initialize: function(){
            this.listenTo(this.model, "change", this.render),
            this.listenTo(this.model, "destroy", this.remove)
        },

        render: function(){
            alert(this.$el);
        },

        events: {
            "click .toggle-li"  : "toggleDone",
            "dblclick .view"    : "edit",
            "keypress .edit"    : "updateOnEnter",
            "blur .edit"        : "close"
        },

        toggleDone: function(){
            console.log("toggleDone");
        },

        edit: function(){
            console.log("edit");
        },

        updateOnEnter: function(){
            console.log("updateOnEnter");
        },

        close: function(){
            console.log("close");
        }
    });

    return TodoView;
});