var gulp = require('gulp')
    gutil = require('gulp-util'),
    stylus = require('gulp-stylus'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

gulp.task('log', function(){
    gutil.log('hello!!');
});

var stylus_src =['components/stylus/amain.styl'];

var jsSources=[
    'components/scripts/hola.js',
    'components/scripts/otroscript.js',
    'components/scripts/template.js'
];

gulp.task('stylus', function(){
    gulp.src(stylus_src)
        .pipe(stylus()
              .on('error', gutil.log)
        )
        .pipe(gulp.dest('builds/development/css'))
});


gulp.task('js', function(){
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
});


// Default gulp task to run
//gulp.task('default', ['stylus']);
