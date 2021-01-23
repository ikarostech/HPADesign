module.exports = {
  "publicPath": "/project-name/",
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