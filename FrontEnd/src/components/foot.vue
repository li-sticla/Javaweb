<template>
  <div id="copyright">
    <p>
      Copyright © 2020 -<span>{{ time | formatDate }}</span
      >-NCU.All Rights Reserved
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: Date.parse(new Date()),
    };
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value);
      let y = date.getFullYear();
      return y;
    },
  },
};
</script>
<style scoped>
#copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #764ba2;
  opacity: 0.3;
}
p {
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  color: #fff;
  margin: 0;
}
</style>
