'use strict';

function * quips(name){
    yield "你好" + name +  "!";
    yield "希望你能喜欢这篇介绍es6的文章";
    if ( name.substring(0, 1) == 'x' ){
        yield "你的名字" + name + " 首字每是X";
    }
    yield "我们下次再见"
}

var quips_iterator = quips("xxx");

console.log(quips_iterator.next());
console.log(quips_iterator.next());
console.log(quips_iterator.next());
console.log(quips_iterator.next());

for( let obj of quips_iterator ){
    console.log(obj);
}

console.log("============== iterator ===========  ");

var iter = Symbol.iterator;

class RangeIterator {

    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() {
        return this;
    }

    next(){

        var value = this.value;

        if (value < this.stop){

            this.value++;

            return { done: false, value: value };

        } else {

            return { done: true, value: undefined };
        }
    }
}

var range_iter = new RangeIterator( 0, 10 );

for( let val of range_iter ){
    console.log( val );
}


console.log("============== generator ===========  ");

function * range(start, stop){
    for ( let i=start; i<stop; i++ ){
        yield i;
    }
}

var range_generator = range(0, 10);

for( let val of range_generator ){
    console.log(val);
}





