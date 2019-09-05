<template>
<el-row type="flex" justify="space-between" class="row">
  <el-col :span="8" class="col1">
    <i class="el-icon-s-unfold"></i>
    <span>江苏传智播客教育科技股份有限公司</span>
  </el-col>
  <el-col :span="4" class="col2">
    <img :src="user.photo?user.photo:defaultImg" alt="">
    <el-dropdown trigger="click" class="dropdown" @command="handleCommand">
      <span class="el-dropdown-link">
        <span>{{user.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="user">个人信息</el-dropdown-item>
        <el-dropdown-item command="git">git地址</el-dropdown-item>
        <el-dropdown-item command="quit">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      defaultImg: require('../assets/img/avatar.jpg')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'quit') {
        window.localStorage.clear()
        this.$router.push('/home/login')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/shuiruohanyu/81heimatoutiao'
      } else {
        // 进入个人信息
      }
    },
    getuserdata () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        console.log(res)
        this.user = res.data
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
    float: right;
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
