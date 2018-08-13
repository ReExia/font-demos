var path = require('path');

module.exports = {
    entry: {
        chapter1:['./src/app/script/index/index.ts']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            }
        ],
        loaders: [
            {test: /\.css$/, loader: "style!css?sourceMap!postcss"},
            {test: /\.less$/, loader: "style!css!less|postcss"},
            {test: /\.scss$/, loader: "style!css!sass|postcss"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            },
            {test: /\.json$/, loader: 'json'},
            {test: /\.html$/, loader: 'raw'}
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
};