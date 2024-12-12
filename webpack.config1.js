const path = require("path");

module.exports = {
  entry: "./src/pages/components/chatbot.js",
  output: {
    filename: "shopify.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Automatically resolve these extensions
  },
};
