module.exports = {
    //程序的入口文件
    entry : "./src/app.js",
    output : {
        //所有打包好的资源的存放位置
        path : "./src/dist",

        //使用url-loader 的资源的前缀
        publicPatch : "./build",

        //生成的打包文件名
        filename : "build.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module : {
        loaders : [
            {
                //用于匹配加载器支持的文件格式的正则表达式
                test : /\.(js|jsx)$/,

                //要使用的加载器类型
                //加载器支持通过查询字符串的方式接收参数
                exclude: /node_modules/,
                loader : 'jsx-loader?harmony'
            },
//            { test: /\.js|jsx$/, loaders: ['babel'] },
            {
                //用于匹配加载器支持的文件格式的正则表达式
                test : /\.(css)$/,

                //多个加载器通过“！”连接
                loader : 'style-loader!css-loader'
            },
            {
                //用于匹配加载器支持的文件格式的正则表达式
                test : /\.(png|jpg)$/,

                //url-loader z支持base64编码的行内资源
                loader : 'url-loader?size=8192'
            }
        ]
    }
}