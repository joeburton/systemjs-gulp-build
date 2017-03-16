const gulp = require('gulp');
const Builder = require('systemjs-builder');
const jsdoc = require('gulp-jsdoc3');

// bundle the SystemJS files to one single bundle standalone file
gulp.task('build', function () {
    
    var builder = new Builder('', 'app/js/config.js');
    
    builder
    .bundle('app/js/main.js', 'dist/outfile.js')
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });

});


gulp.task('default', ['build']);
