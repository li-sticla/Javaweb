<template>
  <div id="navmenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color= '#764ba2'
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"><router-link to="/" @click="setIndex(1)">首页</router-link></el-menu-item>
      <el-menu-item index="2" >
        <template slot="title"><router-link to="/news/publish" @click="setIndex(2)">新闻发布</router-link></template>
      </el-menu-item>
      <el-menu-item index="3" disabled >消息中心</el-menu-item>
      <el-menu-item index="4" 
        ><router-link to='/user' @click="setIndex(4)">
          <el-avatar icon="el-icon-user-solid"></el-avatar> </router-link
      ></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeIndex: '1',
      userId: '',
    }
  },
  methods:{
    setIndex(index){
      this.activeIndex = index
    }
  }
};
</script>
<style scoped>
ul {
  display: flex;
  justify-content: center;
}
li{
width: 10%;
}
#navmenu>>>a{
  text-decoration: none;
}
</style>
