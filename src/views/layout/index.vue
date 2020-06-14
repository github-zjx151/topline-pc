<template>
  <el-container class="container">
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/views/layout/components/aside.vue'
import Header from '@/views/layout/components/header.vue'
export default {
  components: {
    Aside,
    Header
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;

  .el-header {
    color: #333;
    padding: 0;
  }

  .el-aside {
    background-color: #323745;
    color: #333;
  }

  .el-main {
    background-color: #f2f3f5;
    color: #333;
  }
}
</style>
