/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

const gulp = require('gulp');
const sass = require('gulp-sass');

const sassDirectory = './style/**/*.scss';

gulp.task(
    'sass',
    () =>
        gulp
            .src(sassDirectory)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist/css')),
);

gulp.task(
    'sass:watch',
    ['sass'],
    () => {
        gulp.watch(sassDirectory, ['sass']);
    },
);
