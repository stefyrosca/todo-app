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
    node: {
        Buffer: false
    },
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
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // }
        ]
    }
}