import browserSync from 'browser-sync';

const browserSyncInit = () => {
    return browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
};

export default browserSyncInit;