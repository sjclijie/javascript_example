define(function(require, exports, module){

    var _ = require("underscore");
    var $ = require("jquery");

    var TodoView = require("backbone").View.extend({

        template: _.template($("#item-template").html()),

        tagName: "li",

        events: {
            "click .toggle-li" :    "toggleDone",
            "dblclick .view"   :    "edit",
            "blur .edit"       :    "close"
        },

        initialize: function(){
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;   
        },

        edit: function(){
            this.$el.find('div').css({"display":"none"});
            this.$el.find('.edit').css({"display":"block"});
        },

        close: function(e){
            var val = $(e.target).val();

            if (!val){
                this.clear();
            }else {
                this.model.save({
                    title: val
                });
                this.$el.find('div').css({"display":"block"});
                this.$el.find('.edit').css({"display":"none"});
            }
        },

        toggleDone: function(){
            this.model.toggle();
            return false;
        },

        clear: function(){
            this.model.destroy();
        }
    });

    return TodoView;
});