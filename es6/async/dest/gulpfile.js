"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
    return gulp.src("**.js").pipe(babel({
        presets: ["es2015"]
    })).pipe(gulp.dest("dest"));
});