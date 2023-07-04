import { defineNuxtConfig } from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

      buildModules: [
        // ...
        '@nuxtjs/proxy',
      ]
      ,
      proxyHeaders: true,
      proxy: {
        '/abc': {    //1
            target: 'https://www.baidu.com',    //2
            changOrigin: true,
            pathRewrite: {    //3
                '^/abc': ''
            }
        }
    }  
})
