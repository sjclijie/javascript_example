/**
 * 箭头函数
 *
 * 1. 语法绑定this ——箭头函数中的this的值，在函数定义的时候就绑定了，而不是根据函数执行时机来绑定；
 * 2. 不能new ——箭头函数不能被当做构造函数来用，当通过new来调用时，会报错；
 * 3. this不能被修改 ——在箭头函数的整个生命周期内，this始终保持同一个值，无法被修改；
 * 4. 没有arguments对象 ——在箭头函数内部，不能通过arguments来访问参数，你必须使用已命名的参数，或其他ES6功能。
 */
'use strict';

var arr  = [1,4,6,1,6,8,3,5,2,8];

console.log( arr.sort((a,b) => a-b) );

var a = [];

for(let i=0; i<10; i++){
    a[i] = function(){
        console.log(i);
    }
}

a[6]();

console.log("======= for ... of ============= ");

var b = ["b", 1, 3, "c"];

for(let val of b ){
    console.log(val);
}

console.log("======= for ... of ============= ");

for(let val of "abc" ){
    console.log(val);
}


