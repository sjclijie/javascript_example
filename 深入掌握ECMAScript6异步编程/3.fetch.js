
//var fetch = require("node-fetch");

import fetch from "node-fetch";
import co from "co";

/*
function *gen(){

    var url = "https://api.github.com/users/github";
    var url = "http://hello/wworld";

    var result = yield fetch(url);

    console.log( result );
}

var g = gen();

var result = g.next();

result.value.then( function(data){
    return data.json();
}).then( function( data ){
    console.log("error", data);
    g.next( data );
});
*/

/*
fetch( "https://api.github.com/users/github").then(function( res ){
    return res.json();
}).then(function(data){
    console.log(data);
});
*/


function *gen(){
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    var json = yield result.json();
    console.log(json);
}

//1.
var g = gen();
var r = g.next();
r.value.then( function( res ) {
    let a = g.next(res);
    a.value.then( function(a){
        g.next(a);
    });
});


//2
co( gen );




