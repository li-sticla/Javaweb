<template>
  <div class="news-detail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <div class="body">
      <div class="title">{{ news_detail.title }}</div>
      <el-divider></el-divider>
      <ul class="info">
        <li>新闻类型：{{ news_detail.type }}</li>
        <li>
          发布者：<el-avatar>{{ news_detail.nickname }}</el-avatar>
        </li>
        <li>发布时间：{{ news_detail.publish_time }}</li>

        <li><span class="el-icon-chat-line-round">评论数量：0</span></li>
        <li>
          <el-button
            type="primary"
            size="medium"
            icon="el-icon-edit"
            @click="newsEdit"
            :disabled="visible"
          ></el-button>
        </li>
        <li>
          <el-button
            type="primary"
            size="medium"
            icon="el-icon-delete"
            @click="newsDelete"
            :disabled="visible"
          ></el-button>
        </li>
      </ul>
      <el-divider></el-divider>
      <div v-html="news_detail.content" class="content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news_detail: {},
      visible: true,
      newsId: "",
    };
  },
  mounted() {
    // console.log(this.$route.params);  /*获取动态路由传值*/
    this.newsId = this.$route.params.newsId;
    let news_id = this.$route.params.newsId;
    //调用请求数据的方法
    this.requestData(news_id);
  },
  methods: {
    requestData(newsId) {
      this.$axios({
        method: "get",
        url: "/news/detail",
        params: {
          newsId: newsId,
        },
        headers: { Token: this.$store.state.token },
      }).then((res) => {
        console.log(res);
        this.news_detail = res.data.data.news_detail;
        if (res.data.data.own === 1) {
          this.visible = false;
        }
      });
    },
    newsDelete() {
      this.$confirm("此操作将永久删除该新闻, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios({
            method: "DELETE",
            url: "/news/delete",
            data: {
              newsId: this.newsId,
            },
            headers: { Token: this.$store.state.token },
          }).then((res) => {
            if (res.data.code === 1) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.$router.push("/");
            }
          });
        })
        .catch((error) => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    newsEdit() {
      this.$router.push({
        name: "edit",
        params: {
          newsId: this.$route.params.newsId,
          title: this.news_detail.title,
          content: this.news_detail.content,
          typeId: this.news_detail.typeId,
        },
      });
    },
  },
};
</script>
<style scoped>
.el-breadcrumb {
  margin: 20px 0;
  font-size: 20px;
}
.body {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.title {
  margin: 50px;
}
.content {
  min-height: 800px;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info li {
  width: 300px;
  height: 60px;
  float: left;
  display: flex;
  align-items: center;
  margin: 10px;
}
</style>
