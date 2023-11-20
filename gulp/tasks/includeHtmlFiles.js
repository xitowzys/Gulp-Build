import gulp from "gulp";

import fileinclude from "gulp-file-include";
import config from "../config";

const includeHtmlFiles = () => {
    return gulp
        .src("./src/*.html")
        .pipe(fileinclude(config.fileIncludeSetting))
        .pipe(gulp.dest("./dist/"));
};

export default includeHtmlFiles;
