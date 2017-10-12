const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:80",
        'webpack/hot/only-dev-server',
        "./app/index.tsx"
    ],
    output: {
        filename: "./build/bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{loader: 'react-hot-loader/webpack'}, {loader: 'ts-loader'}]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{loader: 'style-loader'}, {
                    loader: 'css-loader',
                    options: {importLoaders: 1}
                }, {loader: 'postcss-loader'}
                ]
            }
        ]
    }
}