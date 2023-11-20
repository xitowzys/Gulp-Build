import gulp from 'gulp';
import clean from 'gulp-clean';
import fs from 'fs';
import config from '../config';

const cleanDist = (done) => {
    if (fs.existsSync(config.distPath)) {
        return gulp.src(config.distPath, {
            read: false
        }).pipe(clean());
    }

    done();
};

export default cleanDist;