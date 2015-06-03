module.exports = function(grunt){

    grunt.initConfig({
        
        pkg: grunt.file.readJSON("package.json"),

        transport: {
            seajs: {
                files: {
                    "./build": ['./js/main.js', './js/module2.js', './js/module3.js']
                }
            }
        },

        concat: {
            seajs: {
                files: { 
                    'dist/js/main.js': ['./build/js/main.js', './build/js/module2.js', './build/js/module3.js']
                 }
            }
        },

        uglify: {
            seajs: {
                files: { "dist/js/main.min.js": ["dist/js/main.js"] }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cmd-transport');

    grunt.registerTask('default', ['transport','concat','uglify']);
}