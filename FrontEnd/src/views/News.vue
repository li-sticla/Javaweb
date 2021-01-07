<template>
  <div id="news-detail">
    <h2>{{ news_detail.title }}</h2>
    <div v-html="news_detail.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "数据",
      news_detail: {
        title: "修改标题0",
        content: "修改内容0",
        publish_time: "2021-01-07 13:03:21",
        type: "国内",
        user_id: 4,
        nickname: "hhh",
      },
    };
  },
  mounted() {
    // console.log(this.$route.params);  /*获取动态路由传值*/
    let newsId = this.$route.params.newsId;
    //调用请求数据的方法
    this.requestData(newsId);
  },
  methods: {
    requestData(newsId) {
      this.$axios({
        method: "get",
        url: "/news/detail",
      })
        .then((res) => {
          this.news_detail = res.body.data.news_detail;
        })
        .catch((error) => {
          console.log(err);
        });
    },
  },
};
</script>
