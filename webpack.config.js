const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
 
module.exports = {
    entry: {
        anyname: `./src/scss/style.scss`,
        main: `./src/index.js`,
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
 
    devServer: {
        host: '192.168.33.10',
        port: '8000',
        contentBase: "dist",
        open: true
    },
 
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css'}),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
}