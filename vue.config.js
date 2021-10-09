module.exports = {
  devServer: {
    // development server port 8000
    disableHostCheck: true, // 禁用主机检查
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
    }
  },
}