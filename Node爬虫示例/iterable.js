

var iterable = {

    [Symbol.iterator]: function(){
        var i = 0;
        var iterator = {
            next: function(){
                var iteratorResult = {
                    done: i > 10,
                    value: i++
                }

                return iteratorResult;
            }
        }

        return iterator;
    }
}


for( let item of iterable ){
    console.log( item );
}

