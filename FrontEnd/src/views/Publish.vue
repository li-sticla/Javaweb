<template>
  <div id="news-publish">
          <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>新闻发布</el-breadcrumb-item>
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
      <el-button type="primary" @click="submit"
        >提交<i class="el-icon-upload el-icon--right"></i
      ></el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      type: "",
    };
  },
  methods: {
    submit() {
      this.$axios({
        method: "post",
        url: "/news/publish",
        data: {
          title: this.title,
          content: this.content,
          typeId: this.type,
        },
        headers: { Token: this.$store.state.token },
      }).then((res) => {
        if (res.data.code === 1) {
          this.$message({
            message: "恭喜你，发布成功",
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
