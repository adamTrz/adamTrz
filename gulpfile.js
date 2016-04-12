var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var jade        = require('gulp-jade');
var jshint      = require('gulp-jshint');
var uglify      = require('gulp-uglify');
var minifyCss   = require('gulp-minify-css');
var rename      = require("gulp-rename");
var babel       = require("gulp-babel");
var sourcemaps  = require("gulp-sourcemaps");



var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'pipe'})
        .on('close', done);
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});

// Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
gulp.task('sass', function () {
    return gulp.src('assets/css/*.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        // .pipe(minifyCss({compatibility: 'ie8'}))
      	.pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({stream:true}))
});

// Compile jade files
gulp.task('jade', function(){
  return gulp.src('_jadefiles/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('_includes'));
});
gulp.task('templates', function(){
  return gulp.src('_jadefiles/pages/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('pages'))
  // .pipe(gulp.dest('_site/assets/pages'));
});


// Catch JS errors
gulp.task('jshint', function() {
    return gulp.src('assets/js/functions.js')
        .pipe(jshint(
          { esversion: 6,
            asi: true}
        ))
        .pipe(jshint.reporter('jshint-stylish'))
});

// Uglify JS
gulp.task('compress', function() {
  return gulp.src('assets/js/functions.js')
		.pipe(babel({
			presets: ['es2015']
		}))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('assets/js'));
});


// Watch scss files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch('assets/js/**', ['jekyll-rebuild']);
    gulp.watch('assets/js/functions.js',['jshint','compress']);
    gulp.watch(['index.html', '_layouts/*.html', '_includes/*'], ['jekyll-rebuild']);
    gulp.watch('_jadefiles/*.jade', ['jade']);
    gulp.watch('_jadefiles/pages/*.jade', ['templates','jekyll-rebuild']);
});


// Default task
gulp.task('default', ['browser-sync', 'watch']);
