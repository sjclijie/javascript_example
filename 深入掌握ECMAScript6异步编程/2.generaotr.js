
function *gen(x){
    var y = yield x + 2;
    return y;
}

var g = gen(1);

console.log( g.next() ); //{ value: 3, done:false }

//console.log( g.next(6) ); //{ value: 6, done:true }
console.log( g.next() ); //{ value: undefine, done: true }


function *gen2( x ){

    try {
        var y = yield x + 2;
    } catch(e){
        console.log( e );
    }

    return y;
}

var g2 = gen2(1);
g2.next( 1 );
g.throw( "出错了" );

