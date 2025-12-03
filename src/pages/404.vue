<script setup>

</script>

<template>
  <el-result
      icon="warning"
      title="404 提示"
      sub-title="您的页面走丢了~"
  >
    <template #extra>
      <el-button type="primary" @click="$router.push('/')">Back</el-button>
    </template>
  </el-result>
</template>

<style scoped>

</style>