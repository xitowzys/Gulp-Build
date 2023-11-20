import gulp from 'gulp';
import gulpStylelint from '@ronilaukkarinen/gulp-stylelint';

const stylelintDist = () => {
    return gulp
        .src('dist/css/**/*.css')
        .pipe(gulpStylelint({
            reporters: [
                { formatter: 'string', console: true }
            ],
            fix: true

        }))
        .pipe(gulp.dest('dist/css'));
};

export default stylelintDist;