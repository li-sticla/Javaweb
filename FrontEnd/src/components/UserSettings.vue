<template>
  <div class="user_settings">
    <div class="header"><h2>UserSettings</h2></div>
    <UserSettingsNav />
    <router-view />
    <router-view name="helper" />
  </div>
</template>
<script>
const UserSettingsNav = {
  template: `
<div class="nav">
  <router-link to="/settings/emails">emails</router-link>
  <br>
  <router-link to="/settings/profile">profile</router-link>
</div>
`
};
export default {
  components: {
    UserSettingsNav
  }
};
</script>
<style scoped>
.user_settings{
  width: 95%;
  height: 600px;
  margin: 0 auto;
  padding: 0;
}
.header{
  height: 150px;
  line-height: 150px;
background: url(../assets/images/panel4.jpg);
color: rgb(204, 75, 165);
}
.nav {
  width: 15%;
  float: left;
  font-size: 16px;
  font-family: fantasy;
}
.nav >>> a {
  width: 98%;
  height: 150px;
  float: left;
  border: 3px solid transparent;
  border-radius: 5%;
  text-decoration: none;
  text-align: center;
 line-height: 150px;
  color: rgb(96, 108, 219);
    background: url(../assets/images/bg1.png);
  padding: 10px 0;
}
.nav >>> a:hover{
  color: blanchedalmond;
}

</style>
