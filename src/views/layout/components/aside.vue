<template>
  <div class="aside">
    <div class="aside-logo">
      <img src="./logo_admin.png" alt="" />
    </div>
    <div class="aside-nav">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo mynav"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        router
      >
        <!-- 首页 -->
        <el-menu-item index="/home">
          <span slot="title">首页</span>
        </el-menu-item>
        <!-- 内容管理 -->
        <el-submenu index="2">
          <template slot="title">
            <span>内容管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/publish">发布文章</el-menu-item>
            <el-menu-item index="/contentList">内容列表</el-menu-item>
            <el-menu-item index="/commentList">评论列表</el-menu-item>
            <el-menu-item index="/material">素材管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 粉丝管理 -->
        <el-submenu index="3">
          <template slot="title">
            <span>粉丝管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/imageText">图文数据</el-menu-item>
            <el-menu-item index="/fanProfile">粉丝概况</el-menu-item>
            <el-menu-item index="/fanImage">粉丝画像</el-menu-item>
            <el-menu-item index="/fanList">粉丝列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 账户信息 -->
        <el-menu-item index="/userInfo">
          <span slot="title">账户信息</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.aside {
  height: 100%;
  .aside-logo {
    height: 60px;
    background-color: #2e2f32;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 120px;
    }
  }
  .mynav {
    border: 0;
  }
}
</style>
