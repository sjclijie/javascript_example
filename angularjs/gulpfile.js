var gulp = require("gulp");
var livereload = require("gulp-livereload");

gulp.task("default", function(){
    livereload.listen();
    gulp.watch(["**/*", "!node_modules/**/*", "!bower_components/**/*"], function(file){
        livereload.changed(file);
    });
})



