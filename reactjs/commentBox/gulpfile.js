/**
 * Created by Jaylee on 15/9/20.
 */

var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    notify = require("gulp-notify"),
    browserify = require("gulp-browserify");

gulp.task("browserify", function(){
    console.log(1);
    return gulp.src(["app/**/*"])
        .pipe(browserify({
                transform: "reactify"
            }))
        .pipe(gulp.dest("./dist/"))
        .pipe(notify({"message":"reactify complete."}))
});

gulp.task("otherFiles", function(){
    console.log(2);
    return gulp.src(["dist/**"])
        .pipe(livereload());
});

gulp.task("watch", function(){

    livereload.listen();

    gulp.watch(["app/**/*"], ["browserify"]);
    gulp.watch(["dist/**"], ["otherFiles"]);
});


