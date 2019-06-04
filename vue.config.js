module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('storysource')
      .test(/stories\/.+?\.jsx?$/)
      .pre()
      .use('storysource')
      .loader(require.resolve('@storybook/addon-storysource/loader'))
  },
};