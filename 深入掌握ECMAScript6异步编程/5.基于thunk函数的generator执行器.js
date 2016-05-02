

import fs from "fs";
import thunkify from "thunkify";

var readFile = thunkify(fs.readFile);

//yield将程序执行权移动generator函数，那么就需要一种方法将执行权再交给generator函数。
//这种方法就是Thunk函数，因为它可以在回调函数里将执行权还给generator函数。
var gen = function *(){

    var r1 = yield readFile("/Users/Jaylee/1.txt");
    console.log(r1.toString());
    var r2 = yield readFile("/Users/Jaylee/2.txt");
    console.log(r2.toString());
    var r3 = yield readFile("/Users/Jaylee/3.txt");
    console.log(r3.toString());
}

//手动执行
/*
var g = gen();
var r1 = g.next();

r1.value( function(err, data){

    if ( err ) throw err;

    var r2 = g.next( data );

    r2.value( function(err, data){
        
        if ( err ) throw err;    

        g.next( data );

    } );

} );
*/

//基于Thunk函数的generator执行器

function run( fn ){

    var gen = fn();

    function next( err, data ) {
        
        if ( err ) throw err;

        var result = gen.next( data );

        if ( result.done ) return;
    
        result.value( next );
    }

    next();
}

run( gen );


//Thunk函数并不是唯一的Generator函数自动执行方案，因为自动执行的关键是，必须有一种机制，自动控制generator函数的流程，接收和交还程序的执行权。
//使用Promise对象同样可以做到



