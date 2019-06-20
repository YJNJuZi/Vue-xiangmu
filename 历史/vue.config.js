let path = require("path")   //node提供的路径模块
// path.resolve _dirname 绝对路径
// _dirname拼接目录或者文件夹
const resolve = (filename) => {
  return path.resolve(__dirname, filename)
}
resolve("src")
// :process.node.NODE_ENV baseUrl=>Publicpath 3.3之前用baseUrl 3.3之后用Publicpath
// :process.env.NODE_ENV  环境变量（node自动提供）
// Publicpath 通过环境变量
module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "www.baidu.com/" : "/",
  outputDir: "build", //输出路径 dist变成了我们自定义的build
  assetsDir: "static",  //生成静态资源目录，会把js css img静态资源都放在我们自定义的目录里面=>static
  runtimeCompiler: true,   //main.js编译template模板用的，一般不使用
  parallel: require("os").cpus().length > 1,  //多余1核cpu启动并行压缩时
  productionSourceMap: false,  //生成环境下产生map文件
  chainWebpack: (congfig) => {
    // 修改webpack内部配置
    // alias修改别名  _c代替src/components路径
    congfig.resolve.alias.set("_c", resolve("src/components"))//通过这个设置别名
  },
  // congfigureWebpack: {
  //   // 新增插件等
  //   plugins: []
  // },
  devServer: {  //配置代理 跨域 webpack反向代理
    // proxy: "http://localhost:3000/"
    proxy: {
      ///api正常访问路径 axios.get("/api/user")
      "/api": {
        target: "http://localhost:3000",  //代理的目标
        chageOrigin: true,  //是否改变域名3000的接口仍然会在8080上面访问
        pathRewrite: { "^/api": "/" }
      }
    }
  }
}
// 代理的流程
// 1.target 目标 http://localhost:3000/api
// 2.chageOrigin 该域名 http://localhost:8080/api
// 3.pathRewrite