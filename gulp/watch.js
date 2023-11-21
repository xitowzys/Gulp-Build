import gulp from 'gulp';
import browserSyncReload from './tasks/browserSyncReload';
import browserSyncInit from './tasks/browserSyncInit';

import includeHtmlFiles from './tasks/includeHtmlFiles';
import sassCompiler from './tasks/sassCompiler';
import copyImages from './tasks/copyImages';
import jsBuild from './tasks/jsBuild';

const watch = () => {
    browserSyncInit();

    gulp.watch('./src/scss/**/*.scss', gulp.series(
        sassCompiler,
        browserSyncReload
    ));
    gulp.watch('./src/**/*.html', gulp.series(
        includeHtmlFiles,
        browserSyncReload
    ));

    gulp.watch('./src/img/**/*', gulp.series(
        copyImages,
        browserSyncReload
    ));

    gulp.watch('./src/js/**/*', gulp.series(
        jsBuild,
        browserSyncReload
    ));
};

export default watch;