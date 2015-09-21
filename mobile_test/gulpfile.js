
var gulp = require("gulp"),
    livereload = require("gulp-livereload");


gulp.task("all", function(){
    gulp.src(["**", "!node_modules/**"])
        .pipe(livereload())
});

gulp.task("watch", function(){
    livereload.listen();
    gulp.watch(["**", "!node_modules/**"], ["all"])
});


    
