import {ElNotification} from "element-plus";

// 消息提示
export function toast(message,type='success',dangerouslyUseHTMLString=false){
    // 提示成功
    ElNotification( {
        title: 'Success',
        message: message,
        // message: res.data.message, // 无效 被拦截
        type: type,
    })
}