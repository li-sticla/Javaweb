<template>
  <div id="body">
    <div class="news">
      <el-row>
        <el-col class="list"> 最新资讯 </el-col>
      </el-row>
      <el-row>
        <el-col v-for="item in currentPageData" :key="item.newsId">
          <el-card shadow="hover">
            <router-link :to="'/news/' + item.newsId">
              {{ item.type }}
            </router-link>
            <router-link :to="'/news/' + item.newsId">
              {{ item.content }}
            </router-link>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange()"
        @current-change="handleCurrentChange()"
        @prev-click="handlePrevClick()"
        @next-click="handleNextClick()"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: '',
      currentPageData: [
        {
          newsId: 1,
          content: "修改内容0",
          type: "国内",
          publish_time: "2021-01-07 13:03:21",
        },
        {
          newsId: 2,
          content: "新内容",
          type: "国际",
          publish_time: "2021-01-07 13:22:06",
        },
      ],
      pageSize: 10,
    };
  },
  methods: {
    requestData() {
      this.$axios({
        method: "get",
        url: "/news/all",
      })
        .then((res) => {
          console.log(res);
          this.currentPageData = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
      alert(this.currentPage)
    this.requestData();
  },
};
</script>
<style scoped>
#body {
  height: 1000px;
}
.news >>> .list {
  display: flex;
  align-items: center;
  height: 50px;
  font-family: "SimHei";
  font-size: 20px;
  color: #c471f5;
  text-align: left;
  border-bottom: 2px rgb(105, 49, 168) solid;
}
.news >>> .el-card__body {
  height: 40px;
  margin-bottom: 20px;
}
.news >>> a {
  display: block;
  padding: 25px 50px;
  float: left;
  text-decoration: none;
  color: #c471f5;
}
.news >>> a:hover {
  color: #7028e4;
}
</style>
