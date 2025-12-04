import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from 'path'; // node js 内置模块

// https://vite.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'), // 设置 @ 指向 src 目录
      '~': path.resolve(__dirname, 'src') // 设置 ~ 指向 根 目录
    }
  },

  server: {
    // host: '0.0.0.0',
    // port: 8080,
    // open: true,
    // cors: true,
    proxy: {  // 代理
      '/api': { // 匹配 /api 代替下面的域名 baseUrl --> /api
        target: 'http://ceshi13.dishait.cn:80/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue(), WindiCSS(),],

})
