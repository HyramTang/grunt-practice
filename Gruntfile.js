module.exports = function (grunt) {
    var sassStyle = 'expanded';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            },
            compressjs: {
                files: {
                    './build/global.min.js': ['./build/global.js']
                }
            }
        },
        less: {
            development: {
                options: {
                    banner: '/*! 这是 Grunt Less 生成的 CSS 文件 <%= grunt.template.today("yyyy-mm-dd") %> */',
                    paths: ['src/lessmix'] //指定扫描 @import 文件目录
                },
                files: {
                    'build/less.css': 'src/less.less'
                }
            }
        },
        sass: {
            output: {
                options: {
                    style: sassStyle
                },
                files: {
                    'build/sass.css': 'src/sass.scss'
                }
            }
        },
        concat: {
            options: {
                // separator: ';',
            },
            dist: {
                src: ['./src/concat1.js', './src/concat2.js'],
                dest: './build/global.js'
            }
        },
        jshint: {
            all: ['./build/global.js']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load less
    grunt.loadNpmTasks('grunt-contrib-less');
    // Load sass
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Load concat
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Load jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('outputcss', ['sass']);
    grunt.registerTask('lessc', ['less:development']);
    grunt.registerTask('concatjs', ['concat']);
    grunt.registerTask('conpressjs', ['concat', 'jshint', 'uglify:compressjs']);
}