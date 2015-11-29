'use strict';

//var arr = ["abc","hello","world"];
//
//var [first, second, third] = arr;


function * fib(){
    var a = 0;
    var b = 1;

    while( true ){
        yield a;
        //var tmp = a;
        //a = b;
        //b = tmp + b;
        [a, b] = [b, a + b];
    }
}

//var [first, second, third, fourth, fifth, sixth] = fib();

var fib_generator = fib();

console.log( fib_generator.next() );
console.log( fib_generator.next() );
console.log( fib_generator.next() );
console.log( fib_generator.next() );
console.log( fib_generator.next() );
console.log( fib_generator.next() );
console.log( fib_generator.next() );
console.log( fib_generator.next() );
console.log( fib_generator.next() );

console.log("======== ======== ========");

var map = new Map();
map.set("aaa", "the global");
map.set("bbb", "the document");

for( var obj of map ){
    console.log(obj);
}




