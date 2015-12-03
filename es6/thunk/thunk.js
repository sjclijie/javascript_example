
var fs = require("fs");

//正常版本的readFile
//fs.readFile(fileName, callback);

var Thunk = function(fileName){

    return function(callback){
        return fs.readFile(fileName, callback);
    }
}

var readFileThunk = Thunk("./trunk.js");

readFileThunk(function(err, data){
    err ? console.log(err) : console.log(data);
});





