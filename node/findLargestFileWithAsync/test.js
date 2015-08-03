/**
 * Created by Jaylee on 15/7/31.
 */

var findLargest = require("./findLargestFile");
var path = require("path");
var fs = require("fs");

var basePath = path.join(__dirname, "../../testa");

findLargest(basePath);


