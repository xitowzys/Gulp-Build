const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.ts'
        // contacts: './src/js/contacts.js',
        // about: './src/js/about.js',
    },
    output: {
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};

export default config;
