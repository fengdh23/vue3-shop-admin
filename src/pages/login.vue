
<template>
  <el-col :lg="8" :md="12" class="left">
    <div class="logo">
      <img alt="" src="../assets/logo.png">
    </div>
  </el-col>

  <el-col :lg="8" :md="12" class="right">
    <h2 class="title"> 欢迎回来</h2>
    <div>
      <span class="line"></span>
      <span>账号密码登录</span>
      <span class="line"></span>
    </div>

    <el-form ref="formRef" :model="form" :rules="rules" class="w-[250px]">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon><user /> </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password">
          <template #prefix>
            <el-icon><lock /> </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-[250px]" color="#626aef" round type="primary"
                   @click="onSubmit">登 录</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>


<script setup>
import {reactive, ref} from "vue";

import {login} from "~/api/manager.js";

import {ElNotification} from "element-plus";

import {useRouter} from  'vue-router'


const form = reactive({
    username: '',
    password: ''
})
const  router = useRouter()

// 验证规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 25, message: '长度在 3 到 15 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 25, message: '长度在 3 到 15 个字符', trigger: 'blur' }
    ]
}

const formRef = ref(null) // 响应式

const onSubmit = () => {
    formRef.value.validate((valid)=>{
      if(!valid){
        return false
      }
      login(form.username, form.password)
      .then(res => {
         console.log();
         // 提示成功
        ElNotification( {
          title: 'Success',
          message: res.data.message,
          type: 'success',
        })
        // 存储 token 和用户相关信息

        // 跳转到首页
        router.push('/')
       })
      .catch(err => {
        console.log();
        ElNotification({
          title: 'Error',
          message: err.response.data.message || '登录失败',
          type: 'error',
          duration: 3000
        })
      })
    })
}


</script>


<style scoped>

</style>