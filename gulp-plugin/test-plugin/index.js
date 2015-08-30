
var through = require("through2"),
    gutil = require("gulp-util"),
    pluginError = gutil.PluginError;

const PLUGIN_NAME = "gulp-test";

function gulpTest() {

    //console.log(PLUGIN_NAME);
    //console.log("Hello world");

    return through.obj( function(file, enc, next){

        console.log( file );

        if ( file.isNull() ){

            this.push(file);

            return next();
        }

        if ( file.isStream() ){

            this.emit("error", new pluginError(PLUGIN_NAME, "Streaming not supported."));

            return next();
        }

        var content = file.contents.toString();

        //console.log(content);

        return next();

    } , function(){

    } );
}

module.exports = gulpTest;