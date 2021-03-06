const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/js/app.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },

    module: {
        loaders: [
            // process *.vue files using vue-loader
            { 
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // process *.js files using babel-loader
            // the exclude pattern is important so that we don't
            // apply babel transform to all the dependencies!
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/css/style.css',
                to: 'css/style.css'
            },
            {
                from: './src/assets/imgs/',
                to: 'assets/imgs/'
            }
        ])
    ],

    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    }
};