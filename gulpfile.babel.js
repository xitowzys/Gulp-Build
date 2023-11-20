import gulp from "gulp";
import includeHtmlFiles from "./gulp/tasks/includeHtmlFiles";
import formatHtmlDist from "./gulp/tasks/formatHtmlDist";
import sassCompiler from "./gulp/tasks/sassCompiler";
import copyImages from "./gulp/tasks/copyImages";
import startServer from "./gulp/tasks/startServer";

const { task, series, parallel } = gulp;

gulp.task("start-server", startServer);

gulp.task(
    "build",
    gulp.series(
        gulp.parallel(includeHtmlFiles, sassCompiler, copyImages),
        formatHtmlDist
    )
);

task("default", series("build"));
