/**
 * Created by Jaylee on 15/8/30.
 */

var Higo = require("client");

var higo = Higo.create({
    "timeout": 10
});

higo.uploadFile("./1.jpg", {
    kind: "pic",
    ext: "jpg",
    timeout: 10000000
},function(err, data, res){
    //console.log(err);
    console.log( JSON.parse( data.toString() ) );
});