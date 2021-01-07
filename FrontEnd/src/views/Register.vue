<template>
  <div class="login clearfix">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
          <h3>注册</h3>
          <hr />
          <el-form-item prop="username" label="用户名"
            ><el-input
              v-model="user.username"
              placeholder="请输入用户名"
            ></el-input
          ></el-form-item>
          <el-form-item prop="username" label="昵称"
            ><el-input
              v-model="user.nickname"
              placeholder="请输入昵称"
            ></el-input
          ></el-form-item>
          <el-form-item prop="email" label="邮箱"
            ><el-input v-model="user.email" placeholder="请输入邮箱"></el-input
          ></el-form-item>
          <el-form-item prop="password" label="设置密码"
            ><el-input
              v-model="user.password"
              show-password
              placeholder="请输入密码"
            ></el-input
          ></el-form-item>
          <el-form-item
            ><el-button type="primary" icon @click="doRegister()"
              >注册账号</el-button
            ></el-form-item
          >
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      user: {
        username: "",
        nickname: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    // console.log($);
    // console.log("1111");
  },
  methods: {
    doRegister() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.nickname) {
        this.$message.error("请输入昵称！");
        return;
      } else if (!this.user.email) {
        this.$message.error("请输入邮箱！");
        return;
      } else if (this.user.email != null) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.user.email)) {
          this.$message.error("请输入有效的邮箱！");
        } else if (!this.user.password) {
          this.$message.error("请输入密码！");
          return;
        } else {
          // this.$router.push({ path: '/' }); //无需向后台提交数据，方便前台调试
          let _this = this;

          const params = {
            username: this.user.username,
            nickname: this.user.nickname,
            email: this.user.email,
            password: _this.user.password,
          };

          this.$axios({
            method: "post",
            url: "/user/register",
            data: params,
            headers: { Authorization: "Basic dXNlcjoxMjM0NTY=" },
          }).then((res) => {
            console.log("输出response.data", res.data);
            if (res.data.code === 1) {
              this.$message({
                message: "恭喜你，注册成功,即将进入登录页面",
                type: "success",
              });
              setTimeout(() =>{_this.$router.push({ path: "/login" })}, 1500);
            } else {
              this.$message.error('您输入的用户名或邮箱已存在')
            }
          });
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 940px;
  background: url("../assets/images/bg1.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.login-wrap {
  width: 400px;
  height: 400px;
  margin: 215px auto;
  background-color: #ffffff;
  overflow: hidden;
  padding-top: 10px;
  line-height: 20px;
}

h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}

.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>
