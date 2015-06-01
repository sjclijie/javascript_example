

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
                if(!module.entity){
                    module.entity= moduleMap[module.dependencies[i]].factory();
                } 
                console.log(args);
            }

            console.log(args);

            module.entity = module.factory.apply(null,args);
            
            return module.entity;

            /*
            var module = moduleMap[name];

            console.log(module);

            var args = [];

            console.log(module.dependencies.length);
            
            for(var i=0; i<module.dependencies.length; i++){
                //args.push(moduleMap[module.dependencies[i]].factory());
                //console.log(moduleMap[module.dependencies[i]].factory());
                if ( moduleMap[module.dependencies[i].entity] ){
                    args.push(moduleMap[module.dependencies[i].entity]);
                } else {

                    args.push(this.use(module.dependencies[i]));
                }
            }

            console.log(args);
            
            module.entity = module.factory.apply(this, args);

            return module.entity;
            */
        }
    }

})();


thin.define("A", [], function(){
    console.log(this);
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

thin.define("E",["A"], function(A){
    return A;
});

var A = thin.use("A");
console.log(A);

//var E = thin.use("E");
//console.log(E);

