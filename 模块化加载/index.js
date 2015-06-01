(function(){

    var moduleMap = {};

    var fileMap = {};
    
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
        },

        require: function(pathArr, callback){
            for(var i=0; i<pathArr.length; i++){

                var path = pathArr[i];

                if (!fileMap[path]){
                    var head = document.getElementsByTagName('head')[0];
                    var node = document.createElement("script");
                    node.type   = "text/javascript";
                    node.async  = true;
                    node.src    = path + '.js';
                    node.onload = function(){
                        fileMap[path] = true;
                        head.removeChild(node);
                        checkAllFiles();
                    }
                    head.appendChild(node);
                }
            }

            function checkAllFiles(){

                var allLoaded = true;

                for( var i=0; i<pathArr.length; i++ ){
                    if (!fileMap[pathArr[i]]){
                        allLoaded = false;
                        break;
                    }
                }

                if (allLoaded){
                    callback();
                }
            }
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

thin.require(['http://php.jaylee.cc/jquery-1.9.1'], function(){
    alert(111);       
});

