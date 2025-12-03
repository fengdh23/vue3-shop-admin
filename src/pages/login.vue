<script setup>
import {reactive} from "vue";

const form = reactive({
    username: '',
    password: ''
})

const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ]
}

</script>

<template>
  <el-col :lg="8" :md="12" class="left">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
  </el-col>

  <el-col :lg="8" :md="12" class="right">
    <h2 class="title"> 欢迎回来</h2>
    <div>
      <span class="line"></span>
      <span>账号密码登录</span>
      <span class="line"></span>
    </div>

    <el-form ref="loginForm" :model="form" :rules="rules" class="w-[2500px]">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon> </el-icon>

          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<style scoped>

</style>