
var gulp = require("gulp"),
    test = require("./test-plugin"),
    qiniu = require("gulp-qiniu");

gulp.task("default", function(){

    gulp.src("./public/*.*")
        .pipe(test())
        .pipe(gulp.dest("./dist"));
});

gulp.task("qiniu", function(){
    gulp.src("./public/*.*")
        .pipe(qiniu({
            accessKey: "az6Uzj4vOKv4fRY1fZB6iZ3MIOQUgcgVjSLPOB9p",
            secretKey: "ZmLbS91dDjRAKFsFoVa14x-3buJpnq-cPjcc4LlK",
            bucket: "test",
            private: false
        }, {
            dir: "./",
            versioning: false,
            versionFile: "./cdn.json"
        }))
});


