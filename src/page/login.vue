<template>
  <div class="box">
    <div class="login-box">
      <div class="user-name">
        <div class="lee-4">用户名:</div>
        <div>
          <el-input v-model="username" placeholder="随意输入就可以提交"></el-input>
        </div>
      </div>
      <div class="pass">
        <div class="lee-4">密码:</div>
        <div>
          <el-input type="password" v-model="password" maxlength="20" placeholder="随意输入就可以提交"></el-input>
        </div>
      </div>
      <div class="login">
        <el-button type="primary" class="login-btn" @click="fnLogin()">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    fnLogin () {
      console.log(this.username.length)
      if (this.username.length < 1) {
        this.$message.error('不要这么抠门好嚒，账号里面一个字都不写就想登陆')
        return
      }
      if (this.password.length < 1) {
        this.$message.error('不要这么抠门好嚒，你家的密码是空的嚒？')
        return
      }
      this.$router.push('./home/index')
    }
  }
}
</script>

<style scoped>
.login {
  padding-top: 40px;
  text-align: center;
}
.login-btn{
  padding-left: 28px;
  padding-right: 28px;
}
.box {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #909399;
  height: 100%;
}
.login-box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  height: 300px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
}
.user-name,
.pass {
  overflow: hidden;
  display: flex;
  padding: 40px 50px 0;
}
.pass div,
.user-name div {
  -webkit-box-flex: 4;
  -ms-flex: 4;
  flex: 4;
}
.pass .lee-4,
.user-name .lee-4{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.lee-4 {
  width: 4em;
  text-align: right;
  display: flex;
  align-items: center;
  height: 40px;
}
</style>
