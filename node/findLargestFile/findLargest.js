/**
 * Created by Jaylee on 15/7/31.
 */

var fs = require("fs");
var path = require("path");

module.exports = function(dir, callback){

    fs.readdir(dir, function (err, files) {
        if ( err ){ callback(err); }

        var hasError = false;
        var status = [0];
        var fileLength = files.length;
        var counter = 0

        files.forEach(function(file, index){

            fs.stat(path.join(dir, file), function(er ,stat){

                if ( hasError ){
                    return;
                }

                if (er){
                    hasError = true;
                    callback(er)
                }

                status[index] = stat;

                if ( ++counter == fileLength){

                    console.log(status);

                    var largest = status.filter(function(stat){
                            return stat.isFile();
                        }).reduce(function (prev, next) {
                        return next["size"] > prev["size"] ? next : prev;
                    });

                    callback(null, files[status.indexOf(largest)])
                }
            })
        });
    })
}

