
var mySymbol = Symbol("isMoving");

console.log(mySymbol);

var obj = {};

obj[mySymbol] = "ok";

console.log( obj[mySymbol] );

console.log( typeof Symbol() );

const MAX_CAT_SIZE = 3000;

console.log( MAX_CAT_SIZE );


