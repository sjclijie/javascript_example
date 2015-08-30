/**
 * Created by Jaylee on 15/8/29.
 */

"use strict";

var urllib = require("urllib");
var fs = require("fs");
var formstream = require('formstream');
var http = require('http');

function Higo(options){

    this.options = options;
    this._uploadURL = 'http://172.16.0.199:8080/pic/fileupload';
    /*
    if ( this._uploadURL[this._uploadURL.length - 1] !== "/" ){
        this._uploadURL += "/";
    }
    */
}

Higo.create = function(options){
    return new Higo(options);
}

Higo.prototype._request = function( url, options, callback ){

    if (typeof options == "function"){
        callback = options;
        options = {
            dataType: "pic"
        }
    }

    options.timeout = options.timeout || this.options.timeout;

    urllib.request(url, options, function (err, data, res) {

        if (err) {
            callback(err);
        }

        var statusCode = res.statusCode;

        if (statusCode >= 400) {
            callback(exports.createError(statusCode, data));
        }

        callback(null, data, res);
    });
}

Higo.prototype.uploadFile = function(filepath, options, callback){

    var that = this;

    if (typeof options === "function"){
        callback = options;
        options = null;
    }

    fs.stat(filepath, function(err, stat){

        if ( err ){
            return callback(err);
        }

        var form = formstream();
        form.file('file', filepath);
        form.field('kind', 'pic').field('ext', 'jpg');

        that.upload(form, options, callback);
    });
}


Higo.prototype.upload = function (content, options, callback) {

    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    /*
    if (typeof content === 'string') {
        content = new Buffer(content);
    }*/

    var headers = content.headers();

    console.log(content.content);

    var reqOptions = {
        headers: headers,
        method: 'POST',
        stream: content,
    };

    urllib.request("http://172.16.0.199:8080/pic/fileupload", reqOptions, function(err, data, res){

        console.log(err);

        console.log(data);

        console.log(res);

    });

    /*
    var req = http.request(reqOptions, function(res){
        console.log('Status: %s', res.statusCode);
        res.on('data', function (data) {
            //console.log(data.toString());
        });
    });

    form.pipe(req);
    */

    //this._request(this._uploadURL, reqOptions, function (err, data, res) {

        //console.log(data);

        /*
        if (err) {
            return callback(err, data, res);
        }

        if (data) {
            data.url = this.resourceURL(data.key);
        }

        callback(null, data, res);
        */
    //});
}



var higo = Higo.create("aaa");

/*
higo.uploadFile("/Users/Jaylee/1.jpg", function(err, data){
    //console.log(data);
});
*/

var urllib = require('urllib');
var formstream = require('formstream');
var fs = require("fs");
var file = fs.readFileSync("./1.jpg");

var form = formstream();
//form.file('file', '/Users/Jaylee/WebServer/Documents/javascript/gulp-plugin/client/1.jpg', 'hello.jpg');
form.field("kind", "pic");
form.field("ext", "jpg");
form.buffer("file", file, "aaaa");

console.log(form);

var headers = form.headers();

//console.log(form);
console.log(headers);

var req = urllib.request('http://172.16.0.199:8080/pic/fileupload', {
    method: 'POST',
    headers: headers,
    stream: form,
    timeout: 100000,
}, function (err, data, res) {
    // upload finished
    //console.log(err);
    //console.log(data);
    //console.log(res);

    if ( err ){
        throw err;
    }

    console.log(data.toString());
});