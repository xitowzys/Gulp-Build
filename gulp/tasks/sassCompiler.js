import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";

const sass = gulpSass(dartSass);

const sassCompiler = () => {
    return gulp
        .src("./src/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./dist/css/"));
};

export default sassCompiler;
