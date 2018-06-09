const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlExtract = require('html-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: './css/app.css'
});
const htmlExtract = new HtmlExtract({
    filename: './index.html',
    template: './src/views/index.html'
});

const _config = {
    entry: './src/modules/app/index/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: ['css-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.tpl$/,
                use: {
                    loader: 'ejs-loader'
                }
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 8192,
                        name: './img/[name].[ext]'
                    }
                }
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        extractLess,
        htmlExtract
    ]
}
module.exports = _config;