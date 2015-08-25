var gulp = require("gulp"),
    connect = require("gulp-connect"),
    concat = require("gulp-concat"),
    browserify = require("gulp-browserify"),
    notify = require("gulp-notify"),
    port = process.env.port || 8000;

gulp.task("browserify", function(){
    return gulp.src("./app/js/main.js")
        .pipe(browserify({
            transform: "reactify"
        }))
        .pipe(gulp.dest("./dist/js")).
        pipe(notify({"message":"reactify complete."}));
});

//live reload
gulp.task("connect", function(){
    connect.server({
        //root: "./",
        port: port,
        livereload: true
    });
});

gulp.task("js", function(){
    gulp.src("./dist/**/*.js")
        .pipe(connect.reload());
});

gulp.task("html", function () {
    gulp.src("./app/**/*.html")
        .pipe(connect.reload());
});

gulp.task("watch", function(){

    gulp.watch("./dist/**/*.js",["js"]);
    gulp.watch("./app/**/*.html", ["html"]);
    gulp.watch("./app/**/*.js", ["browserify"]);
});

gulp.task("default", ["browserify"]);

gulp.task("serve", ["browserify", "connect", "watch"]);
