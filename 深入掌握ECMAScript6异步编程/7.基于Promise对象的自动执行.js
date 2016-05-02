
import fs from "fs";
import co from "co";

//co函数库其实就是将两种自动执行器（ Thunk 和 Promise ）包装成一个库。
//使用co的前提条件就是yield命令的后面，只能是Thunk函数或者Promise对象


//包装成返回Promise对象的函数
var readFile = function(fileName){
    return new Promise(function(resolve, reject){
        fs.readFile( fileName, function( err, data){
            if ( err ) reject( err );
            resolve( data );
        } );
    });
}


var gen = function *(){

    var f1 = yield readFile( "/Users/Jaylee/1.txt");
    var f2 = yield readFile( "/Users/Jaylee/2.txt");

    console.log( f1.toString() );
    console.log( f2.toString() );
}



//手动执行
var g = gen();
var r1 = g.next();

r1.value.then( function( data ){
    var r2 = g.next( data );
    r2.value.then( function(data){
        g.next( data );   
    } );
} );


//自动执行器
function run( fn ) {
    var g = fn();
    function next(data){
        var result = g.next( data );
        if ( result.done ) return;
        result.value.then( function(data){
            next( data ); 
        } );
    }
    next();
}

run( gen );

//使用co
co( gen );


