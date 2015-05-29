

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

            /*

            var module = moduleMap[name];

            if (!module.entity){

                var args = [];
                
                for(var i=0; i<module.dependencies.length; i++){

                    if ( moduleMap[module.dependencies[i].entity] ){

                        args.push(moduleMap[module.dependencies[i].entity]);
                    
                    } else {
                        args.push(this.use(module.dependencies[i]));
                    }
                }

                module.entity = module.factory.apply(null, args);
            }

            console.log(moduleMap);

            return module.entity;

            */

            var module = moduleMap[name];

            console.log(module);

            var args = [];
            
            for(var i=0; i<module.dependencies.length; i++){
                args.push(moduleMap[module.dependencies[i]].factory());
                //console.log(moduleMap[module.dependencies[i]].factory());
            }

            return args;
        }
    }

})();


thin.define("A", [], function(){
    return "a";
});

thin.define("B", [], function(){
    return "b";
});

thin.define("C", [], function(){
    return "c";
});

thin.define("D", ["A","B","C"], function(A, B, C){
   return A+B+C; 
});


var D = thin.use("D");

console.log(D);
