<template>
  <div class="login-container">
    <el-form ref="form"
             class="container">
      <el-form-item>
        <div class="avatar">
          图片不能显示
          <img src="../../assets/avatar.jpg"
               alt="">
        </div>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="账号"
                  prefix-icon="el-icon-search"
                  v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password"
                  placeholder="密码"
                  prefix-icon='el-icon-star-on'
                  v-model='form.password'></el-input>
      </el-form-item>
      <el-button type="primary"
                 size="medium"
                 @click="login">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
import { fetch_login } from "@/api/index.js";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.form.username.trim() === "" || this.form.password.trim() === "")
        return this.open3();

      fetch_login(this.form).then(res => {
        console.log(res);
      });
    },
    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
  }
  .el-form {
    margin: 150px auto;
    padding: 0 2.5rem;
    width: 25rem;
    height: 15.625rem;
    background-color: #fff;
    text-align: center;

    .el-button {
      width: 100%;
    }
  }
  .avatar {
    position: relative;
    left: 50%;
    width: 120px;
    height: 120px;
    margin-left: -60px;
    margin-top: -60px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 10px solid #ccc;
    box-shadow: 0 1px 5px #ccc;
    background-color: red;
    .img {
      display: block;
      width: 100px;
      height: 100px;
      z-index: 100;
    }
  }
}
</style>
