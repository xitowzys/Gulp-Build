import gulp from 'gulp';
import includeHtmlFiles from './gulp/tasks/includeHtmlFiles';
import formatHtmlDist from './gulp/tasks/formatHtmlDist';
import sassCompiler from './gulp/tasks/sassCompiler';
import copyImages from './gulp/tasks/copyImages';
import cleanDist from './gulp/tasks/cleanDist';
import stylelintDist from './gulp/tasks/stylelintDist';
import watch from './gulp/watch';
import jsBuild from './gulp/tasks/jsBuild';

gulp.task('clean-dist', cleanDist);

gulp.task('build', gulp.series(
    cleanDist,
    gulp.parallel(
        includeHtmlFiles,
        jsBuild,
        sassCompiler,
        copyImages
    ),
    formatHtmlDist,
    stylelintDist
));


gulp.task('watch', gulp.series(
    'build',
    watch
));

gulp.task('default', gulp.series('build'));
