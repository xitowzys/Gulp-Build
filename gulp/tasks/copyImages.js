import gulp from 'gulp';

const copyImages = () => {
    return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img/'));
};

export default copyImages;
