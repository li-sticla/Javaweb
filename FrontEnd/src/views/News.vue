<template>
  <div id="content">
    <h2>{{ list.title }}</h2>

    <div v-html="list.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "数据",
      list: [],
    };
  },
  mounted() {
    // console.log(this.$route.params);  /*获取动态路由传值*/
    var aid = this.$route.params.aid;
    //调用请求数据的方法
    this.requestData(aid);
  },
  methods:{
       requestData(aid){
           this.$axios({
               method: 'get',
               url:''
           })
           .then(res => {
               this.list=response.body.result[0];
           })
           .catch(error => {
               console.log(err);
           })
       }
  }
};
</script>
