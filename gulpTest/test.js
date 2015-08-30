/**
 * Created by Jaylee on 15/8/30.
 */

var Higo = require("higo-cdn");

var higo = Higo.create({
    uploadUrl: "http://php.jaylee.cc/upload.php",
    "timeout": 10
});

higo.uploadFile("./package.json", {
    kind: "pic",
    ext: "jpg",
    timeout: 10000
},function(err, data, res){
    if ( err ){
        console.log(err);
    } else {
        console.log( JSON.parse( data.toString() ) );
    }
});
