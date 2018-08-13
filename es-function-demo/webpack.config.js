var path = require('path');
var babelpolyfill = require("babel-polyfill");
var config = {
    entry: {
        script: ['./src/app/script/index/index.js'],
        chapter2: ['./src/app/script/chapter2/index.js'],
        chapter3: ['./src/app/script/chapter3/index.js'],
        chapter4: ['./src/app/script/chapter4/index.js'],
        chapter6: ['./src/app/script/chapter6/index.js'],
        chapter7: ['./src/app/script/chapter7/index.js'],
        chapter8: ['./src/app/script/chapter8/index.js'],
        chapter9: ['./src/app/script/chapter9/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css?sourceMap!postcss"},
            {test: /\.less$/, loader: "style!css!less|postcss"},
            {test: /\.scss$/, loader: "style!css!sass|postcss"},
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                include: /src/,
                query: {presets: ['es2015']}
            },
            {test: /\.jsx$/, loader: "jsx-loader"},
            {test: /.css$/, loader: 'style!css'},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'},
            {test: /\.json$/, loader: 'json'},
            {test: /\.html$/, loader: 'raw'}
        ]
    }
};

module.exports = config;