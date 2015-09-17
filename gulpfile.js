
var gulp = require("gulp"),
    livereload = require("gulp-livereload");


gulp.task("all", function(){
    gulp.src(["移动端高清多屏适配方案/**","reactjs/test/**"])
        .pipe(livereload())
});

gulp.task("watch", function(){
    livereload.listen();
    gulp.watch(["移动端高清多屏适配方案/**", "reactjs/test/**"], ["all"])
});


    
