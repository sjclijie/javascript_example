'use strict';

/**
 * 不定参数和默认参数
 */



/*
function containsAll( haystack ){

    for( let i =1; i<arguments.length; i++ ){

        var needle = arguments[i];

        if ( haystack.indexOf(needle) === -1){
            return false;
        }
    }

    return true;
}
*/

function containsAll( haystack, ...needles ){

    for(let val of needles){
        if (haystack.indexOf(val) === -1){
            return false;
        }
    }

    return true;
}

console.log( containsAll("bababa", "b", 'c') );




