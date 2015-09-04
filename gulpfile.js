

var gulp = require("gulp"),
    livereload = require("gulp-livereload");


gulp.task("all", function(){
    gulp.src("css相关/*")
        .pipe(livereload())
});


gulp.task("watch", function(){
    livereload.listen();
    gulp.watch("css相关/*", ["all"])
});


    
