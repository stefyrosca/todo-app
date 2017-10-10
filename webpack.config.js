var webpack = require('webpack');
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
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
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
            }
        ]
    }
}