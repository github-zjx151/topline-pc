<template>
  <div class="header">
    <span>江苏传智播客教育科技股份有限公司</span>
    <el-dropdown trigger="click" @command="itemClick">
      <span class="el-dropdown-link header-dropdown">
        <img class="header-img" :src="userinfo.photo" alt="">
        {{userinfo.name}}
        <i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="user">个人信息</el-dropdown-item>
        <el-dropdown-item command="git">git地址</el-dropdown-item>
        <el-dropdown-item command="out">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userinfo: {}
    }
  },
  methods: {
    itemClick (cmd) {
      if (cmd === 'git') {
        window.open('http://www.github.com')
      } else if (cmd === 'out') {
        window.localStorage.removeItem('userinfo')
        this.$router.push('/login')
      }
    }
  },
  created () {
    // 获取本地存储数据进行渲染
    const obj = window.localStorage.getItem('userinfo')
    this.userinfo = JSON.parse(obj)
  }
}
</script>

<style lang="less" scoped>
  .header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    .header-dropdown {
      cursor: pointer;
      display: flex;
      align-items: center;
      .header-img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
</style>
