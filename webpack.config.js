const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/pages/components/chatbot.js", // Adjusted to the correct relative path
  output: {
    path: path.resolve(__dirname, "public"), // Output directory
    filename: "chatbot.bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: "babel-loader", // Use Babel to transpile JS/JSX files
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Automatically resolve these extensions
  },
};
