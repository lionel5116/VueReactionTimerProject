const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: ''
})

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
