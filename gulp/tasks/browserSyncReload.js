import browserSync from 'browser-sync';

const browserSyncReload = (done) => {
    browserSync.reload();
    done();
};

export default browserSyncReload;