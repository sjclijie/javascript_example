
'use strict';

var testIterator = {
    [Symbol.iterator]: function(){
        return this;
    },
    next: function(){
        return {
            done:false,
            value:0
        }
    }
}

for( var key of testIterator){
    console.log(key);
}






