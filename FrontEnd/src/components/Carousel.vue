<template>
  <el-carousel :interval="4000" type="card" height="500px" >
    <el-carousel-item
      v-for="item in this.bigScreen.images"
      :key="item.name"
      :name="item.name"
    >
      <h3 class="medium">
        <img
          :src="item.url"
          style="width: 100%"
        />
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      bigScreen: {
        images: [
          {
            name: "bigScreen01",
            url: "/static/images/dp01.jpg",
          },
          {
            name: "bigScreen02",
            url: "/static/images/dp02.jpg",
          },
          {
            name: "bigScreen03",
            url: "/static/images/dp03.jpg",
          },
          {
            name: "bigScreen04",
            url: "/static/images/dp04.jpg",
          },
          {
            name: "bigScreen05",
            url: "/static/images/dp05.jpg",
          },
        ],
      },
    };
  },
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.55;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
