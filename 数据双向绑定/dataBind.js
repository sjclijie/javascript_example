
thin.define("Person",[],function(){

    function Person(){
        this.name = "Tom";
        this.age = 22;
    }

    Person.prototype.growUp = function(){
        this.age++;   
    }

    return Person;
});



thin.define("DOMBinding", ["_"], function(){

    var Binder = {
        $watch: function(key, watcher){

            if (!this.$watchers[key]){

                this.$watchers[key] = {
                    value: this[key],
                    list: []
                };

                Object.defineProperty(this, key, {
                    set: function(val){
                        var oldValue = this.$watchers[key].value;
                        this.$watchers[key].value = val;

                        for(var i=0; i<this.$watchers[key].list.length; i++){
                            this.$watchers[key].list[i](val, oldValue);
                        }
                    },
                    get: function(){
                        return this.$watchers[key].value;
                    }
                });
            }

            this.$watchers[key].list.push(watcher);
        }
    };

    var vmMap = {};
    var changeHandlers = [];

    function parseElement( element, vm ){

        var model = vm;

        if (element.getAttribute('vm-model')){
            model = bindModel(element.getAttribute('vm-model'));
        }

        for (var i=0; i<element.attributes.length; i++){
            parseAttribute(element, element.attributes[i], model);
        }

        if (model != vm){
            for (var key in model.$watchers){
                model[key] = model.$watchers[key].value;
            }

            if (model.$initializer){
                model.$initializer();
            }
        }
    }

    function parseAttribute(element, attrObj, model){

        if (attr.name.indexOf('vm-') == 0){
            
            var attrName = attr.name.slice(3);
            var attrValue = attr.value;
            
            switch(attrName){
                case 'init':
                    break;
                case 'value':
                    break;
                case 'list':
                    break;
                case 'click':
                    binClick(element, attrValue, model);
                    break;
            }
        }
    }

    function bindModel(name){

        var model = this.use(name);       

        var instance = _.extend(new model(), Binder);

        instance.$watchers = [];

        return instance;
    }
});


function parseElement(element, vm){
    
    var model = vm;

    if (element.getAttribute("vm-model")){
        model = bindModel(element.getAttribute('vm-model'));
    }
    
    for( var i=0; i<element.attributes.length; i++){
        parseAttribute(element, element.attributes[i], model);
    }

    for( var i=0; i<element.children.length; i++){
        parseElement(element.children[i], model);
    }
}

function bindModel(modelName){
    
    var model = thin.use(modelName);

    var instance = new model();
    
    return instance;
}

function parseAttribute(element, attr, model){

    if ( attr.name.indexOf('vm-') == 0){
        
        var type = attr.name.indexOf.slice(3);

        switch(type){
            case 'init':
                break;
            case 'value':
                bindValue(element, attr.value, model);
                break;
            case 'click':
                break;
            case 'enable':
                break;
            case 'disable':
                break;
            case 'visable':
                break;
            case 'invisable':
                break;
            case 'element':
                model[attr.value] = element;
                break;
        }
    }
}

function bindValue(element, key, vm){

    vm.$watch(key, function(value, oldValue){
        element.value = value || "";
    });

    element.onkeyup = function(){
        vm[key] = element.value;
    }

    element.onpaste = function(){
        vm[key] = element.value;
    }
}
