<template>
<el-menu
      class="menu"
      background-color=" #323745"
      text-color="#adafb5"
      :router="true"
      active-text-color="#ffd04b">
      <div class="logo">
          <img src="../../src/assets/img/logo_admin.png" alt="">
      </div>
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
          <template slot="title">
              <i class="el-icon-s-unfold"></i>
              <span>内容管理</span>
              </template>
          <el-menu-item index="/home/publish">发布文章</el-menu-item>
          <el-menu-item index="/home/articles">内容列表</el-menu-item>
          <el-menu-item index="/home/comment">评论管理</el-menu-item>
          <el-menu-item index="/home/material">素材管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>粉丝管理</span>
              </template>
          <el-menu-item index="/home/fansdata">图文数据</el-menu-item>
          <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
          <el-menu-item index="/home/fansimg">粉丝画像</el-menu-item>
        </el-submenu>
      <el-menu-item index="/money">
        <i class="el-icon-setting"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.menu{
  height: 100%;
  min-height: 100vh;
  width: 200px;
  .logo{
      background-color: #2e2f32;
      padding: 10px 0;
      text-align: center;
      img{
          height: 30px;
      }
  }
}
</style>
