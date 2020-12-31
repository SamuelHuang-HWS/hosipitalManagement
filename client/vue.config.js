const path = require("path");
const { config } = require("process");
const webpack = require("webpack");

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: "/", // 静态资源 base路径
    outputDir: "deploy", // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    lintOnSave: false, // 语法检测
    productionSourceMap: false,
    chainWebpack: config => {
      // 修复HMR
      config.resolve.symlinks(true);
  
      // 添加别名 alias
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@c', resolve('src/components'))
        .set('@v', resolve('src/views'))
        .set('@u', resolve('src/utils'))
  
      // 图片压缩
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          gifsicle: { interlaced: false },
          webp: { quality: 75 }
        })
  
      // 最小化代码
      config.optimization.minimize(true)
  
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 300000, // 依赖包超过300000bit将被单独打包
        automaticNameDelimiter: '-',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              return `chunk.${packageName.replace('@', '')}`
            },
            priority: 10
          }
        }
      })
    },
    configureWebpack: config => {
      //组件引入不需要添加以下后缀就可以引用到，例如：import Hello from '@components/Hello' 而非 @components/Hello.vue来引入这个文件。
      config.resolve.extensions = ['.js', '.vue', '.json']
      config.plugins.push(
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
      )
    },
    css:{
      extract:true,
      sourceMap:false,
      loaderOptions:{
        scss:{
          prependData:`
            @import "@/assets/scss/index.scss";
          `
        }
      },
    },
    devServer: {
      open: true,
      hot: true,
      host: process.env.BASE_URL,
      port: 80,
    //   https:true,
      disableHostCheck: true,
    //   proxy: {
    //     '/api': {
    //       // target: "https://10.174.66.108:8080",
    //       target: "",
    //       ws: true,
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/api': ''
    //       }
    //     },
    //   }, // string | Object
      before: app => {}
    },
  };