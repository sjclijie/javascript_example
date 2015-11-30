
'use strict';

var fs = require("fs");

var readFile = function(fileName){
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, function(err, data){
            if ( err ){ 
                reject(err);
            }
            resolve(data);
        });
    });
}

console.log(" ============= generator ========== ");

var gen = function * (){
     yield readFile("./file111.txt");
     yield readFile("./file2.txt");
}


var foo  = gen();

for(let content of foo) {
    content.then(function(data){
        console.log(data.toString());
    }).catch(function(err){
        console.log(err);
    });
}
