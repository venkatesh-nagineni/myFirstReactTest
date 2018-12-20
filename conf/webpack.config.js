/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

require('./env');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    name: 'client',
    entry: [
        'babel-polyfill',
        resolve('src') + '/index.js',
    ],
    output: {
        filename: 'build.js',
        path: resolve('dist/js'),
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': resolve('src'),
            'util': resolve('src/lib/util'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
                query: {
                    presets: [
                        require.resolve('babel-preset-env'),
                        require.resolve('babel-preset-react'),
                        require.resolve('babel-preset-stage-2'),
                    ],
                },
            },
        ],
    },
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env),
        }),
    ],
    devServer: {
        // historyApiFallback: true,
        port: 9005
    },
};
