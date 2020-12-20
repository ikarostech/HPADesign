const path = require('path');

module.exports = {
  mode: "development",

  entry: "./src/main.ts",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.styl$/,
        loaders: ["style-loader", "css-loader", "stylus-loader",{
          loader: 'vuetify-loader',
          options: {
            theme: path.resolve(__dirname, '../src/stylus/'),
            url: true
          }
        }],
        include: path.resolve(__dirname, '../src')
      }
    ]
  },
  resolve: {
    extensions: ['.vue','.ts'],
    alias: {
      vue: "vue/dist/vue.js",
      '@':  path.resolve(__dirname, '../src')
    }
  },
  target: ["web", "es5"],
};
