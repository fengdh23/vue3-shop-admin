import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index.js'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const  app = createApp(App)

// 引入路由
app.use(router)

// 引入element-plus
app.use(ElementPlus)

// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)
}

import 'virtual:windi.css'



app.mount('#app')
