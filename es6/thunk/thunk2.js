

var fs = require("fs");

var Thunk = function(fn){
    
    return function(){

        var args = Array.prototype.slice.call(arguments);

        return function(callback){

            args.push(callback);
            
            return fn.apply(this, args);
        }
    }
}

var readFileThunk = Thunk(fs.readFile);

readFileThunk("./thunk.js")(function(err, data){
    err ? console.log(err) : console.log(data.toString());
});


var f = function(a, b, callback){
    
    var c = a + b;

    callback(c);
    callback(c);
}

var ft = Thunk(f);

ft(1, 2)(console.log);
