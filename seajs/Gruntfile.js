module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            seajs: {
                files: { 'dist/main.js': ['js/module1.js', 'js/module2.js', 'js/module3.js'] }
            }
        },
        uglify: {
            seajs: {
                files: { "dist/main.min.js": ["dist/main.js"] }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat','uglify']);
}