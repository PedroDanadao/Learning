const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'remove-hashbag-loader'],
                include: [path.resolve(__dirname, 'app/src/renderer')],
                exclude: /node_modules/
            }
        ],
    },
};