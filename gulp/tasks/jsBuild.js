import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpackConfig from '../../webpack.config.js';

const jsBuild = () => {
    
    return gulp.src(['src/js/*.js', 'src/js/*.ts'])
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('./dist/js'));
};

export default jsBuild;