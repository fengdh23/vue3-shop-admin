import axios from "axios";

 const  service = axios.create({
    baseURL: '/api', // 请求的域名
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
});

 export default service;