module.exports = {
    devServer: {
      overlay: {
        warnings: false, //不显示警告
        errors: false	//不显示错误
      },
      proxy: {
        '/api/Base': {
          target: 'http://localhost:8001', //后台服务地址
          changeOrigin: false,
          pathRewrite: {
            '^/api/Base': '/'
          }
        },
        '/api/Mes': {
          target: 'http://localhost:8002', //后台服务地址
          changeOrigin: false,
          pathRewrite: {
            '^/api/Mes': '/'
          }
        },
        '/api/Wms': {
          target: 'http://localhost:8003', //后台服务地址
          changeOrigin: false,
          pathRewrite: {
            '^/api/Wms': '/'
          }
        }
  
      }
    },
    lintOnSave:false //关闭eslint检查
  }