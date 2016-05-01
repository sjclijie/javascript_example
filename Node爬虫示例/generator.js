
iterable = {
    [Symbol.iterator]: function *(){
        for( let i=0; i<10; i++){
            yield i;
        }
    }
}

for ( let item of iterable) {
    console.log(item);
}


