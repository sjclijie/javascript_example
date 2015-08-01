
var http = require("http");

var fs = require("fs");

var server = http.createServer(function(request, response){

    response.writeHeader(200, {
       "content-type":"text/html; charset=utf-8"
    });

    var pos = request.url.indexOf("?");

    if (pos >= 0){
        var filename = __dirname + request.url.substring(0, pos);
    } else {
        var filename = __dirname + request.url;
    }

    if ( filename == "/Users/Jaylee/WebServer/Documents/javascript/HTML5/websocket/socket.io/"){
        filename += 'index.js';
    }

    console.log(filename);

    fs.readFile(filename, function(err, data){
        if (err){

            response.writeHeader(404, {
                'content-type':'text/html; charset=utf8'
            });
            response.write("<h3>"+ filename +" Not Found</h3>");
            response.end();

        } else {

            response.writeHeader(200, {
                'content-type':'text/html; charset=utf8'
            });
            response.write(data);
            response.end();
        }
    });
});

var io = require("socket.io")(server);

io.on("connection", function(socket){
    console.log("用人通过websocketl连接");
    socket.emit("news", {hello:"world"});
    socket.broadcast.emit("a", "有人进来了");
});

server.listen(8888);

console.log("server listening on port 8888");
