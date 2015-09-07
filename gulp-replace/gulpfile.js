
var gulp = require("gulp"),
    replace = require("gulp-cdn-replace"),
    config = require("./uploadedFile.json");

gulp.task("default", function(){

    gulp.src("./src/**/*")
        .pipe(replace(config))
        .pipe(gulp.dest("./dist/"));
});


