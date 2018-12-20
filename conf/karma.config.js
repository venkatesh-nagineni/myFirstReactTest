/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

module.exports = function (config) {
    config.set({
        // basePath: '',
        frameworks: ['mocha', 'chai', 'sinon', 'phantomjs-shim'],
        files: [
            { pattern: '../node_modules/babel-polyfill/browser.js', instrument: false},
            '../test/spec/**/*.spec.js',
            '../test/**/*.test.js'
        ],
        exclude: [],
        preprocessors: {
            '../src/**/*.js': ['coverage'],
            '../test/spec/**/*.spec.js': ['webpack', 'sourcemap'],
            '../test/**/*.test.js': ['webpack', 'sourcemap']
        },
        // webpack configuration
        webpack: require('./webpack.config.js'),
        webpackMiddleware: {
            stats: 'errors-only',
            noInfo: true,
        },
        specReporter: {
            showSpecTiming: true
        },
        reportSlowerThan: 25,
        reporters: ['spec', 'coverage'],
        // port: 9876,
        // colors: true,
        // logLevel: config.LOG_INFO,
        // autoWatch: true,
        browsers: ['PhantomJS'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        // singleRun: false,
        // concurrency: Infinity,
        coverageReporter: {
            dir: '../test/coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' },
            ],
        },
    });
};
