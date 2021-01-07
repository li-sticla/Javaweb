<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form
          ref="loginForm"
          :model="user"
          :rules="rules"
          status-icon
          label-width="80px"
        >
          <h3>登录</h3>
          <hr />
          <el-form-item prop="username" label="用户名"
            ><el-input
              v-model="user.username"
              placeholder="请输入用户名"
              prefix-icon
            ></el-input
          ></el-form-item>
          <el-form-item id="password" prop="password" label="密码"
            ><el-input
              v-model="user.password"
              show-password
              placeholder="请输入密码"
            ></el-input
          ></el-form-item>
                <vue-simple-verify ref="verify" @success="success()" />
          <router-link :to="{ name: 'register' }">注册账号</router-link>
          <el-form-item
            ><el-button type="primary" icon="el-icon-upload" @click="doLogin()" :disabled = status
              >登 录</el-button
            ></el-form-item
          >
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueSimpleVerify from 'vue-simple-verify'
import '../../node_modules/vue-simple-verify/dist/vue-simple-verify.css'
export default {
  name: "login",
  components: {
    VueSimpleVerify
  },
  data() {
    return {
      status: true,
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    success(){
      this.status = false
    },
    doLogin() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } else {
        //封装请求数据
        const form = {
          username: this.user.username,
          password: this.user.password,
        };

        this.$axios({
          method: "post",
          url: "/user/login",
          data: form,
        })
          .then((res) => {
            let _this = this;
            if (res.data.code === 1) {
              _this.userToken = res.data.data.token;
              _this.$store.commit("changeLogin", { token: _this.userToken });
              if (_this.$store.state.token) {
                _this.$message({
                  message: "恭喜你，登录成功,即将进入主页",
                  type: "success",
                });
                setTimeout(() => {
                  _this.$router.push({ path: "/" });
                }, 2000);
              }
            } else {
              _this.$message.error("您输入的用户名或密码错误！");
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
  padding: 0;
  margin: 0;
}

.login-wrap {
  width: 400px;
  height: 400px;
  margin: 215px auto;
  background-color: #ffffff;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
  border-radius: 10px;
}

#password {
  margin-bottom: 5px;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  margin-left: -50px;
}

</style>
