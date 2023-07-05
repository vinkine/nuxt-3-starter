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
        '/hello': {    //1
            target: 'https://personal.haitun.store',    //2
            changOrigin: true,
            pathRewrite: {    //3
                '^/hello': ''
            }
        }
    }  
})
