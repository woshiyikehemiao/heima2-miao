<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">
            内容列表
        </template>
      </bread-crumb>
      <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="标题"
        width="700">
      </el-table-column>
      <el-table-column
        prop="name"
        label="评论状态">
      </el-table-column>
      <el-table-column
        prop="all"
        label="总评论数">
      </el-table-column>
      <el-table-column
        prop="fans"
        label="粉丝评论数">
      </el-table-column>
      <el-table-column
        label="操作">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
