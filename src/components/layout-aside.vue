<template>
<el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
          <template slot="title">内容管理</template>
          <el-menu-item index="1-4-1">发布文章</el-menu-item>
          <el-menu-item index="1-4-1">内容列表</el-menu-item>
          <el-menu-item index="1-4-1">评论管理</el-menu-item>
          <el-menu-item index="1-4-1">素材管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">粉丝管理</template>
          <el-menu-item index="1-4-1">图文数据</el-menu-item>
          <el-menu-item index="1-4-1">粉丝概况</el-menu-item>
          <el-menu-item index="1-4-1">粉丝列表</el-menu-item>
          <el-menu-item index="1-4-1">粉丝画像</el-menu-item>
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

<style>

</style>
