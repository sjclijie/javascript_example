
var gulp = require("gulp"),
    connect = require("gulp-connect"),
    port = process.env.port || 8000;

gulp.task( "html" , function(){
    gulp.src( "./**/*.html" )
        .pipe( connect.reload() );
} );

gulp.task( "watch", function(){

    gulp.watch("./**/*.html", ["html"] );

} );

gulp.task( "connect", function(){
    connect.server({
        port: port,
        livereload: true
    });
});

gulp.task( "default", ["connect", "watch"] );


