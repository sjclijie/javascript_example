
var fetch = require("node-fetch");

function * gen(){

    var url = "http://lua.jaylee.cc/api";

    var result = yield fetch(url);

    console.log("age: " + result.age);
}

var g = gen();

var result = g.next();


result.value.then(function(data){

    return data.json();

}).then(function(data){
    
    console.log(data);

    g.next(data);
});
