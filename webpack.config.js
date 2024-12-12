const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals"); // Add this import

module.exports = {
  entry: "./src/pages/index.js", // Entry point of your Next.js app
  output: {
    path: path.resolve(__dirname, "dist"), // The output folder for the bundled file
    filename: "chatbot.js", // The output filename
    library: "Chatbot", // The global variable under which the app will be exposed
    libraryTarget: "umd", // Makes it available to other systems (like Shopify)
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: [nodeExternals()], // Exclude dependencies from the bundle
};
