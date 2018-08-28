module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",
        //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        //  colors: true,//终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        rules: [
           {//ES6、JSX处理
              test:/(\.jsx|\.js)$/,
              exclude: /node_modules/,
              loader:'babel-loader',
              query:
                  {
                      presets:["env", "react"],
                       plugins: [
                            [  "import",{libraryName: "antd", libraryDirectory: "es",style: 'css'}] // antd按需加载
                        ]

                  },
          },
 //   {
     //   test: /\.css$/,
     //   use: [
     //            {
     //              loader: "style-loader"
     //            }, {
     //              loader: "css-loader",
     //              options: {
     //                  modules: true, // 指定启用css modules
     //                  localIdentName: '[name]_[local]_[hash:base64:5]' // 指定css的类名格式
     //                  }
     //              }
     //        ],
     // },


     {//antd样式处理
              test:/\.css$/,
              exclude:/src/,
              use:[
                  { loader: "style-loader",},
                  {
                      loader: "css-loader",
                      options:{
                          importLoaders:1
                      }
                  }
              ]
            },

               {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    }
};
