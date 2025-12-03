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
  plugins: [vue(), WindiCSS(),],

})
