

import fs from "fs";
import thunkify from "thunkify";
import co from "co";

var readFile = thunkify(fs.readFile);

//co函数库其实就是将两种自动执行器（ Thunk 和 Promise ）包装成一个库。
//使用co的前提条件就是yield命令的后面，只能是Thunk函数或者Promise对象


var gen = function *(){

    var r1 = yield readFile("/Users/Jaylee/1.txt");
    console.log(r1.toString());
    var r2 = yield readFile("/Users/Jaylee/2.txt");
    console.log(r2.toString());
    var r3 = yield readFile("/Users/Jaylee/3.txt");
    console.log(r3.toString());
}

co( gen ).then( function(){

    console.log("generator 函数执行完成");
} );
