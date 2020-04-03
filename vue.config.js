module.exports = {
  publicPath: '/stuff/',
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}