const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, 'src/assets/styles/mixin.less'),
        path.join(__dirname, 'src/assets/styles/variables.less')
      ]
    }
  }
})
