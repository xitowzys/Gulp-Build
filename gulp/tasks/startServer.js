import gulp from "gulp";
import server from "gulp-server-livereload";

const startServer = () => {
    return gulp.src("./dist/").pipe(
        server({
            livereload: true,
            open: true,
        })
    );
};

export default startServer;
