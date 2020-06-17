const {src, dest} = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const uglify = require('gulp-uglify');
const beeper = require('beeper');

const handleError = (done) => {
    return function (err) {
        if (err) {
            beeper();
        }
        return done(err);
    };
};

function js(done) {
    pump([
        src([
            // pull in lib files first so our own code can depend on it
            'src/*.js',
        ], {sourcemaps: true}),
        uglify(),
        dest('dist/', {sourcemaps: '.'}),
    ], handleError(done));
}

exports.default = js;
