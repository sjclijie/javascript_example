
import fs from "fs";

//包装成promise函数
var readFile = function( fileName ){
    return new Promise( function(resolve, reject){
        fs.readFile( fileName, function(err, data){
            if ( err )  reject( err );     
            resolve( data );
        } );
    } );
}

//使用async/await
var asyncReadFile = async function(){
    var f1 = await readFile('/Users/Jaylee/1.txt');
    var f2 = await readFile('/Users/Jaylee/2.txt');
    console.log(f1.toString());
    console.log(f2.toString());
}


//优点
/**
 * 1. 内置执行器
 *
 * 2. 更好的语义
 *
 * 3. 更广的适用性 yield 后面只能跟Thunk函数和Promise对象，而async函数的await后面可以跟Promise对象和原始类型
 */
asyncReadFile().then( function(){
    console.log("执行完毕");
} );


//实现

//自动执行器

function spawn( genF ) {

}







