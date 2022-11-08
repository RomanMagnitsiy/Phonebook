const { assert } = require("console");
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 1337,
    },
    module:{
        rules:[
            {
                test:/\.s[ac]ss$/i,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test:/\.css$/i,
                use:[
                    'style-loader', 'css-loader',
                ]
            },
            {
                test: /\.(png|jpeg)/i,
                type:'asset/resource'
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf|svg)(\?v=\d+\.\d+\.\d+)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
};