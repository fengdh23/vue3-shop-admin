import axios from "axios";
import {useCookies} from "@vueuse/integrations/useCookies";
import {toast} from '~/composables/util.js';

 const  service = axios.create({
    baseURL: '/api', // 请求的域名
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
});

 service.interceptors.request.use( function (config) {
    // 在发送请求之前做些什么
     // 往 header 中添加 token
     const cookie = useCookies()
     const token = cookie.get('admin-token')
     if(token){
         config.headers["token"] = token;
     }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


 // 响应拦截器
 service.interceptors.response.use( function (response ){
     return response.data.data;
}, function (error) {
    toast(error.response.data.message)
     return Promise.reject(error);
})

 export default service;