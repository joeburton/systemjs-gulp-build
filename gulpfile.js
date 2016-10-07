var gulp = require('gulp');
var Builder = require('systemjs-builder');

// bundle the SystemJS files to one single bundle standalone file
gulp.task('build', function () {
    
    var builder = new Builder('', 'app/js/config.js');

    builder
    .bundle('app/js/main.js', 'app/js/outfile.js')
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });

});

gulp.task('default', ['build']);
