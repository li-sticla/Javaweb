<template>
  <div class="user">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户界面</el-breadcrumb-item>
    </el-breadcrumb>
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>
    <el-tabs :tab-position="tabPosition" style="height: 800px">
      <el-tab-pane label="用户基本信息">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户基本信息</span>
          </div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="用户创建时间" name="1">
              <div class="text-item">
                用户创建时间：
                {{ this.create_time }}
              </div>
            </el-collapse-item>
            <el-collapse-item title="用户昵称" name="2">
              <div class="text-item">
                用户昵称：
                {{ this.nickname }}
              </div>
            </el-collapse-item>
            <el-collapse-item title="用户邮箱" name="3">
              <div class="text-item">
                用户邮箱：
                {{ this.email }}
              </div>
            </el-collapse-item>
            <el-collapse-item title="用户名" name="4">
              <div class="text-item">
                用户名：
                {{ this.username }}
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="更改密码">
        <div>
          <el-input placeholder="请输入内容" v-model="username" disabled>
            <template slot="prepend">用户名</template>
          </el-input>
        </div>
        <div style="margin-top: 25px">
          <el-input placeholder="请输入内容" v-model="newPassword">
            <template slot="prepend">新密码</template>
          </el-input>
        </div>
        <div style="margin-top: 25px">
          <el-input placeholder="请输入内容" v-model="confirmPassword">
            <template slot="prepend">确认密码</template>
          </el-input>
        </div>
        <div style="margin-top: 25px">
          <el-button type="primary" @click="changePassword"
            >确认修改<i class="el-icon-upload el-icon--right"></i
          ></el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改信息">
        <div>
          <el-input placeholder="请输入内容" v-model="username" disabled>
            <template slot="prepend">用户名</template>
          </el-input>
        </div>
        <div style="margin-top: 25px">
          <el-input placeholder="请输入内容" v-model="newNickname">
            <template slot="prepend">用户昵称</template>
          </el-input>
        </div>
        <div style="margin-top: 25px">
          <el-input placeholder="请输入内容" v-model="newEmail">
            <template slot="prepend">邮箱</template>
          </el-input>
        </div>
        <div style="margin-top: 25px">
          <el-button type="primary" @click="changeInfo"
            >确认修改<i class="el-icon-upload el-icon--right"></i
          ></el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: "left",
      activeName: "1",
      create_time: "",
      nickname: "",
      email: "",
      username: "",
      newPassword: "",
      confirmPassword: "",
      newNickname: "",
      newEmail: "",
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$axios({
        method: "get",
        url: "/user/info",
        headers: { Token: this.$store.state.token },
      }).then((res) => {
        this.create_time = res.data.data.create_time;
        this.nickname = res.data.data.nickname;
        this.email = res.data.data.email;
        this.username = res.data.data.username;
      });
    },
    changePassword() {
      if (!this.newPassword) {
        this.$message.error("请输入新密码！");
        return;
      } else if (this.confirmPassword != this.newPassword) {
        this.$message.error("两次输入的密码不一致！");
        return;
      } else {
        this.$axios({
          method: "put",
          url: "/user/edit/password",
          data: {
            password: this.confirmPassword,
          },
          headers:{Token: this.$store.state.token}
        }).then((res) => {
          console.log(res);
          if (res.data.code === 1){
             this.$message({
                type: "success",
                message: "密码修改成功!",
              });
          }
        });
      }
    },
    changeInfo() {
      this.$axios({
        method: "put",
        url: "/user/edit/basic",
        data: {
          nickname: this.newNickname,
          email: this.newEmail,
        },
        headers:{Token: this.$store.state.token}
      }).then((res) => {
        console.log(res);
                  if (res.data.code === 1){
             this.$message({
                type: "success",
                message: "基本信息修改成功!",
              });
          }
      });
    },
  },
};
</script>
<style scoped>
.user {
  min-height: 800px;
}
.el-breadcrumb {
  margin: 20px 0;
  font-size: 20px;
}
.text-item {
  margin: 20px;
  color: #c471f5;
}
</style>
