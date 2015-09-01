/**
 * Created by Jaylee on 15/8/30.
 */

var gulp = require("gulp");

var higo = require("gulp-higo-cdn");

gulp.task("default", function(){
    gulp.src("./public/*")
        .pipe(higo({
            timeout: 10000,
        })
    );
});

