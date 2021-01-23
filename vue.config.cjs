module.exports = {
  "publicPath": "/HPADesign/",
  "outputDir": "docs",
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },
}