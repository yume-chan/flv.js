const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'flv.js',
        libraryTarget: 'umd',
        library: 'flvjs',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__VERSION__': JSON.stringify(require('./package.json').version),
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'demo'),
        compress: true,
        port: 8000,
    }
}
