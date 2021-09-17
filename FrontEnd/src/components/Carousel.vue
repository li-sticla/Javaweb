<template>
  <el-carousel :interval="4000" type="card" height="500px" >
    <el-carousel-item
      v-for="item in this.bigScreen.images"
      :key="item.name"
      :name="item.name"
    >
      <h3 class="medium">
        <img
          :src="require(`../${item.url}`)"
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
            url:"assets/images/bg1.png",
          },
          {
            name: "bigScreen02",
            url: "assets/images/bg1.png",
          },
          {
            name: "bigScreen03",
            url: "assets/images/bg1.png",
          },
          {
            name: "bigScreen04",
            url: "assets/images/bg1.png",
          },
          {
            name: "bigScreen05",
            url: "assets/images/bg1.png",
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
