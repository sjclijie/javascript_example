/**
 * Created by Jaylee on 15/9/20.
 */

var gulp = require("gulp"),
    connect = require("gulp-connect"),
    browserify = require("gulp-browserify");


gulp.task("browserify", function(){

    return gulp.src("app/**/main.js")
                .pipe(browserify({
                    transform: "reactify"
                })).
                pipe(gulp.dest("./dist/"));
});



