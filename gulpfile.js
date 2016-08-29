var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var uglify = require('gulp-uglify') //js压缩
var concat = require('gulp-concat') //文件合并

gulp.task('jsmin',function(){
    return gulp.src(['public/assets/controllers/*.js','public/assets/services/*.js'])
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/assets/dist'))
})

gulp.task('start', function() {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
})