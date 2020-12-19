<template>
  <div id="copyright">
    <p>
      Copyright © 2020 -<span>{{time | formatDate}}</span
      >-NCU.All Rights Reserved
    </p>
  </div>
</template>
<script>
export default {
data(){
            return{
                time:Date.parse(new Date()),
 } },
            filters: {
                formatDate: function (value) {
                let date = new Date(value);
                let y = date.getFullYear();
               return y;
              }
            }
        }
</script>
<style scoped>
#copyright{
    position: absolute;
    bottom: 0;
    width: 99%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    color: rgb(62, 155, 218);
}
</style>
