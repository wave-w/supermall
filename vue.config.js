module.exports = {
  configureWebpack: {
      resolve:{
        extensions:[],
        alias:{
          'assets':'@/assets',
          'common':'@/common',
          'components':'@/components',
          'network':'@/network',
          'view':'@/view',
        }
      }
    },
    devServer: {

      public: '0.0.0.0:8080',

      hot: true,

      disableHostCheck: true,

  },
 
  }
  