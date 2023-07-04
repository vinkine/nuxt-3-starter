module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 3000,
        proxy: {
            '/abc': {    //1
                target: 'https://www.baidu.com',    //2
                changOrigin: true,
                pathRewrite: {    //3
                    '^/abc': ''
                }
            }
        }
    }
}