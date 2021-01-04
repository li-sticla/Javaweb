<template>

<div @click="getData">获取数据</div>


</template>
<script>
export default {
  methods:{
    getData(){
      this.$axios.get('/api/toutiao/index',{
    params: {
    type: 'top',
    key:'b97ad518db98988c4eb08fc85d736fee',
    },
    // headers: {Authorization: "Basic dXNlcjoxMjM0NTY="}
  })
      .then(res =>{
        console.log(res)
      })
    }
  }
}
</script>