
"use strict"

const fs = require("fs");

let readFile = (fileName) => {

    return new Promise(( reslove, reject ) => {
            
        fs.readFile(fileName, (err, data) => {
                
            if ( err ) reject(err);

            reslove(data);
        });
    });
}

await function asyncReadFile(){

    var f1 = await readFile("./file1.txt");
    var f2 = await readFile("./file2.txt");
    
    console.log( f1.toString() );
    console.log( f2.toString() );
}




