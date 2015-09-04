/**
 * Created by Jaylee on 15/9/01.
 */

var fs = require("fs");

/*
fs.readFile("/etc/hosts", function(err,data){

    if ( err ) throw err;

    console.log( data.toString() );
});

fs.open( "/etc/hosts", "r", function(err, fd){

    if (err) throw err;

    var buf = new Buffer(10000);

    fs.read( fd, buf, 0, 1000, null, function( err, bytesRead, buffer ){

        if ( err ) throw err;

        console.log("已读取:" + bytesRead);

        console.log( buffer.toString() );

    } );
} );
*/

fs.createReadStream("/etc/hosts").pipe(process.stdout);

var request = require("request");
var writer = fs.createWriteStream("xx.gif");

request("http://img14.360buyimg.com/cms/jfs/t1834/99/1298494373/198420/b036802d/55e4f6e4Nad76f5fb.gif")
    .pipe(writer);

