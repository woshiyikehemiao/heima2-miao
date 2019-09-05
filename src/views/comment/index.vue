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
        prop="title"
        label="标题"
        width="660">
      </el-table-column>
      <el-table-column
        :formatter="formatter"
        prop="comment_status"
        label="评论状态">
      </el-table-column>
      <el-table-column
        prop="total_comment_count"
        label="总评论数">
      </el-table-column>
      <el-table-column
        prop="fans_comment_count"
        label="粉丝评论数">
      </el-table-column>
      <el-table-column
        label="操作"
        width="160">
        <el-button type="text" size="mini">修改评论</el-button>
        <el-button type="text" size="mini">o/c评论</el-button>
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
  },
  methods: {
    formatter (row) {
      return row ? '正常' : '关闭'
    },
    getList () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.results
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>

</style>
