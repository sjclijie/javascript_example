/**
 * Created by Jaylee on 15/7/31.
 */

var findLargest = require("./findLargest");

var path = require("path");
var fs = require("fs");

var basePath = "../../";

findLargest(basePath, function(err, file){

    var largestFile = path.join(basePath, file);

    fs.exists(largestFile, function(result){
        if (result){
            console.log("最大的文件为："+largestFile);
            fs.stat(largestFile, function (err, stats) {
                console.log(stats);
            })
        }
    })
});
