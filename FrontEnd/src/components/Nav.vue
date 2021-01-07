<template>
  <div id="navmenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color= '#764ba2'
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" >首页</el-menu-item>
      <el-menu-item index="2" >
        <template slot="title">新闻发布</template>
      </el-menu-item>
      <el-menu-item index="3" disabled >消息中心</el-menu-item>
      <el-menu-item index="4" 
        ><router-link to="/parent/child">
          <el-avatar icon="el-icon-user-solid"></el-avatar> </router-link
      ></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
ul {
  display: flex;
  justify-content: center;
}
li{
width: 10%;
}
</style>
