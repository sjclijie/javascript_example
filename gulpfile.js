

var gulp = require("gulp"),
    livereload = require("gulp-livereload");


gulp.task("all", function(){
    gulp.src("angularjs/**/*")
        .pipe(livereload())
});


gulp.task("watch", function(){
    livereload.listen();
    gulp.watch("angularjs/**/*", ["all"])
});


    
