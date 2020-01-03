module.exports = {
  publicPath: './',
  productionSourceMap: false, //打包后不生成sourceMap文件
  assetsDir: "static",//把打包后的静态文件放到static文件夹内
  devServer: {
    open: true, //项目启动开新窗口
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: { //代理
      '/api': {
        target: 'http://api.xxx.com/api/1', //后台接口地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '' // /api表示配置的接口地址
        }
      },
      '/ips': {
        target: 'http://api.xxx.com/api/2',
        changeOrigin: true,
        pathRewrite: {
          '^/ips': '',
        },
      },
    }
  }
}
