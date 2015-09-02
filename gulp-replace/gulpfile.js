
var gulp = require("gulp"),
    replace = require("gulp-cdn-replace");


gulp.task("default", function(){

    gulp.src("./src/**/*")
        .pipe(replace({
            dir:"./dist/",
            root: {
                js: "https://js.example.com",
                css: "http://css.example.com"
            }
        }))
        .pipe(gulp.dest("./dist/"));

});


