<template>
<el-row type="flex" justify="space-between" class="row">
  <el-col :span="8" class="col1">
    <i class="el-icon-s-unfold"></i>
    <span>江苏传智播客教育科技股份有限公司</span>
  </el-col>
  <el-col :span="3" class="col2">
    <img :src="user.url?user.url:defaultImg" alt="">
    <el-dropdown trigger="click" class="dropdown">
      <span class="el-dropdown-link">
        <span>{{user.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">git地址</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        url: ''
      },
      defaultImg: require('../assets/img/avatar.jpg')
    }
  },
  methods: {
    getuserdata () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        console.log(res)
        this.user.url = res.data.photo
        this.user.name = res.data.name
      })
    }
  },
  created () {
    this.getuserdata()
  }
}
</script>

<style lang="less" scoped>
.row{
  margin: 0 -15px;
  padding: 15px 0;
  height: 35px;
  line-height: 35px;
  .col1{
    color: #2c3e50;
    font-size: 16px;
    i{
      font-size: 20px;
      margin-right: 10px;
    }
  }
  .col2{
    img{
      vertical-align: middle;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
