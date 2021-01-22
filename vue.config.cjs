const path = require('path');

module.exports = {
  "publicPath": "./",
  "outputDir": "docs",
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, './src/')
      },
      extensions: ['.js', '.ts', '.vue', '.json']
    },
  },
}