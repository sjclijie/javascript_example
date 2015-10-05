/**
 * Created by Jaylee on 15/9/20.
 */

var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    notify = require("gulp-notify"),
    browserify = require("gulp-browserify");


gulp.task("browserify", function(){
    return gulp.src(["app/**/main.js", "!node_modules/**/*"])
        .pipe(browserify({
                transform: "reactify"
            }))
        .pipe(gulp.dest("./dist/"))
        .pipe(livereload())
        .pipe(notify({"message":"reactify complete."}))
});

gulp.task("otherFiles", function(){
    return gulp.src(["**","!**/*.js", "!node_modules/**/*"])
        .pipe(livereload());
});

gulp.task("watch", function(){

    livereload.listen();

    gulp.watch(["app/**/*.js","!node_modules/**/*"], ["browserify"]);
    gulp.watch(["**","!**/*.js", "!node_modules/**/*"], ["otherFiles"]);
});


