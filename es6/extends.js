
'use strict'

var proto = {
    value : 4,
    method: function(){
        return 14;
    }
}

var obj = Object.create(proto);

console.log( obj.value );
console.log( obj.method() );



