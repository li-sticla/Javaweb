<template>
  <div id="body">
    <div class="news">
      <el-row>
        <el-col class="list"> 最新资讯 </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col v-for="item in currentPageData" :key="item.newsId">
          <el-card shadow="hover">
            <router-link :to="'/news/detail/' + item.newsId">
              {{ `新闻类型：${item.type}` }}
            </router-link>
            <router-link :to="'/news/detail/' + item.newsId">
              {{ `新闻标题：${item.title} `}}
            </router-link>
            <router-link :to="'/news/detail/' + item.newsId">
              {{ `发布时间: ${item.publish_time} ` }}
            </router-link>
          </el-card>
          <el-divider></el-divider>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      currentPage: 1,
      currentPageData: [],
      pageSizes: [10, 15, 20, 25],
      pageSize: 10,
      total: 100,
    };
  },
  methods: {
    requestData() {
      this.$axios({
        method: "get",
        url: "/news/all",
        params: {
          pageNo: this.currentPage,
          pageSize: this.pageSize,
        },
      })
        .then((res) => {
          console.log(res);
          this.currentPageData = res.data.data.list;
          this.total = res.data.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
      this.requestData();
    },
    handleSizeChange(size) {
      // 每页显示的数量是选择器选中的值size
      this.pageSize = size;
      console.log(this.pageSize); //每页下拉显示数据
      this.requestData();
    },
  },
  mounted() {
    this.requestData();
  },
};
</script>
<style scoped>
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
