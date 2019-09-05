<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-table :data="list" style="width: 100%" v-loading="loading">
      <el-table-column prop="title" label="标题" width="660"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="obj">
          <el-button type="text" size="mini">修改评论</el-button>
          <el-button
            type="text"
            size="mini"
            @click="changestatus(obj.row)"
          >{{obj.row.comment_status?'关闭':'打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center">
    <el-pagination :total="page.total" :current-page="page.page" :page-size="page.size" @current-change='changepage'></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      page: {
        page: 1,
        size: 10,
        total: 0
      },
      list: [],
      loading: false
    }
  },
  methods: {
    changepage (newpage) {
      this.page.page = newpage
      this.getList()
    },
    changestatus (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`你确定要${mess}评论吗`, '提示').then(res => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(res => {
          this.getList()
        })
      })
    },
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getList () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          per_page: this.page.size,
          page: this.page.page
        }
      }).then(res => {
        this.loading = false
        console.log(res)
        this.page.total = res.data.total_count
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
