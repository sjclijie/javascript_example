

(function(){

    var moduleMap = {};
    
    window.thin = {
        define: function(name, dependencies, factory){
            if (!moduleMap[name]){

                var module = {
                    name: name,
                    dependencies: dependencies,
                    factory: factory
                };

                moduleMap[name] = module;
            }

            return moduleMap[name];
        },
        
        use: function(name){
            
            var module = moduleMap[name];

            var args = [];

            for(var i=0; i<module.dependencies.length; i++){
                if( moduleMap[module.dependencies[i]].entity){
                    args.push(moduleMap[module.dependencies[i]].entity);
                } else {
                    args.push(this.use(module.dependencies[i]));
                }
            }

            module.entity = module.factory.apply(null,args);
            
            return module.entity;
        }
    }

})();


thin.define("A", [], function(){
    return "a";
});

thin.define("B", ["A"], function(A){
    return A +"=====";
});

thin.define("C", [], function(){
    return "c";
});

thin.define("D", ["B","C"], function(B, C){
   return B+C; 
});

thin.define("E",["A"], function(A){
    return A;
});

//var A = thin.use("A");
//console.log(A);

//var E = thin.use("E");
//console.log(E);

var D = thin.use("D");

console.log(D);

