<template>
    <div> 后台首页 </div>
    <el-button @click="setCookie">设置 cookie</el-button>
    <el-button @click="getCookie">读取 cookie</el-button>
    <el-button @click="removeCookie">删除 cookie</el-button>
</template>

<script setup>
  import {useCookies} from "@vueuse/integrations/useCookies";

  const cookies = useCookies();

  console.log(cookies)

  function setCookie() {
    cookies.set("admin-token", "admin");
  }

  function getCookie() {
    console.log(cookies.get("admin-token"));
  }

  function removeCookie() {
    cookies.remove("admin-token");
  }

</script>