const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  
  entry: {
    main: './src/index.js',  // Main entry point for index.html
    design: './src/design.js',  // Entry point for design.html
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

    plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDo',
      scriptLoading: 'module',
      template: './src/index.html',
      chunks: ['main'], 
    }),
    new HtmlWebpackPlugin({
      filename: 'design.html',  // Output filename
      scriptLoading: 'module',
      template: './src/design.html',  // Template file
      chunks: ['design'],  

    }),
  ],
  
  output: {
    filename: '[name].bundle.js',  // Use [name] to ensure unique filenames
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};