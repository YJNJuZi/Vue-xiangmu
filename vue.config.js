let path = require("path");
let webpack = require("webpack");
let resolvedir = (file) => {
  return path.resolve(__dirname, file);
}
// publicPath vue-cli3.3版本以上
// baseUrl  vue-cli 3.3以下  3.3之后已经废弃 
// 1.publicPath  可以配置资源路径 
// 2.outputDir输出路径 可以把默认npm run build 出来的dist文件夹改名
// 3.assetsDir  放置静态资源的目录
// 4.runtimeCompiler  支持template渲染，通常不用
// 5.chainWebpack改变webpack内部的配置
// *6.productionSourceMap  生产环境  source-map配置 默认是true 改成false编译的时候不在产生map文件
// 7.configureWebpack 会和默认的webpack配置通过webpackmerge进行合并
// configureWebpack 添加配置   chainWebpack   修改
module.exports = {
  publicPath: process.env.NODE_ENV == "production" ? "www.baidu.com" : "/",
  outputDir: "build",
  assetsDir: "static",
  runtimeCompiler: false,
  chainWebpack: config => {
    config.resolve.alias.set("_c", resolvedir("src/components"))
  },
  productionSourceMap: false,
  devServer: {
    proxy: "http://localhost:4000"
  },
  configureWebpack: {
    plugins: [
      new webpack.BannerPlugin("make by ry")
    ]
  },
  css: {
    modules: true //css模块化  避免重名引发的冲突，起名的时候必须是xxx.moudle.css|scss|less|stylus
  }
}