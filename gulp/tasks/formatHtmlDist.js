import gulp from "gulp";
import formatHTML from "gulp-format-html";

const formatHtmlDist = () => {
    return gulp.src("dist/**/*.html").pipe(formatHTML()).pipe(gulp.dest("dist"));
};

export default formatHtmlDist;
