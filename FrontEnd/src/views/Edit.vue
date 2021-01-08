<template>
  <div id="news-publish">
          <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>新闻修改</el-breadcrumb-item>
</el-breadcrumb>
    <div>
      <el-input placeholder="请输入内容" v-model="title">
        <template slot="prepend">标题</template>
      </el-input>
    </div>
    <div style="margin-top: 25px">
      <el-input placeholder="请输入内容" v-model="content">
        <template slot="prepend">新闻内容</template>
      </el-input>
    </div>
    <div style="margin: 25px">
      <el-select v-model="type" slot="prepend" placeholder="请选择新闻类别">
        <el-option label="新闻类别：国内" value="0"></el-option>
        <el-option label="新闻类别：国际" value="1"></el-option>
        <el-option label="新闻类别：经济" value="2"></el-option>
        <el-option label="新闻类别：军事" value="3"></el-option>
      </el-select>
      <el-button type="primary" @click="submit(newsId)"
        >提交<i class="el-icon-upload el-icon--right"></i
      ></el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsId: 1,
      title: "",
      content: "",
      type: "",
    };
  },
  methods: {
    submit() {
      this.newsId = this.$route.params.newsId;
      this.$axios({
        method: "put",
        url: "/news/edit",
        data: {
          newsId: this.newsId,
          title: this.title,
          content: this.content,
          typeId: this.type,
        },
        headers: { Token: window.localStorage.getItem("token") },
      }).then((res) => {
        console.log(res);
        if (res.data.code === 1) {
          this.$message({
            message: "恭喜你，修改成功",
            type: "success",
          });
          this.$router.push("/");
        }
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
</style>
