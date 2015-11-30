
const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default",() => {
    return gulp.src("**.js")
        .pipe(babel({
            plugins: ["syntax-async-functions", "transform-regenerator", "transform-async-to-generator", "transform-runtime"],
            presets: ["es2015", "stage-3"]
        }))
        .pipe(gulp.dest("dest"));
})

