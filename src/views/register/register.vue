<template>
  <div class="register">
    <div class="register-input">
      <div class="title">账号</div>
      <input v-model="username" placeholder="请输入账号/手机号/邮箱/用户名" class="username" type="text">
      <div class="title">密码</div>
      <input v-model="password" placeholder="请输入密码" class="password" type="password">
      <div class="title">确认密码</div>
      <input v-model="password2" placeholder="请确认密码" class="password" type="password">
      <div class="title">手机号</div>
      <input v-model="phone" placeholder="请输入手机号" class="password" type="password">
        <div class="gotoLogin" @click="gotologin">已有账号？去登录</div>
      <van-button @click="register" class="register-btn" color="linear-gradient(to right, #ff6034, #ee0a24)">注册并登录</van-button>
    </div>
  </div>
</template>

<script>

import {registerApiPath} from "@/util/global";

export default {
  name: "register",
  components:{

  },
  data() {
    return {
      username: "",
      password:"",
      password2:"",
      phone:"",
      token:"",
    }
  },
  methods: {
    register(){
      if (this.username==="" || this.password==="" || this.password2==="" || this.phone===""){
        this.$notify("请把表单填写完整！")
        return
      }
      if (this.password !== this.password2){
        this.$notify("两次输入的密码不一致，请重新输入")
        return
      }
      this.$ajax.post(registerApiPath,{
        username:this.username,
        password:this.password,
        phone:this.phone
      }).then((res)=>{
        console.log(res.data)
        if (res.data.registerStatus ==="ok"){
          let token = res.data.token
          let username =res.data.username
          let phone =res.data.phone
          localStorage.setItem("token",token)
          localStorage.setItem("username",username)
          localStorage.setItem("phone",phone)
          this.$store.commit("SaveUserInfo",res.data)
          console.log(this.$store.getters.getUserInfo);
          this.$router.replace("/")
          this.$notify({message:"注册成功！",background:"#33ff33"})
        }else {
          if (res.data.msg==="账号已经被注册！"){
            this.$notify("账号已被注册！")
          }else if (res.data.msg==="手机号已经被注册！"){
            this.$notify("手机号已被注册！")
          }else{
            this.$notify("服务器出错！")
          }
        }

      })
    },
    gotologin(){
      this.$router.replace("/login")
    }
  },
}
</script>

<style scoped>
.register{
  width:100vw;
  height:100vh;
  position:relative;
  text-align:center;
  line-height:100%;
  color:white;
}
.register::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background:transparent url("../../assets/img/bgc.jpg") center center no-repeat;
  filter:blur(6px);
  z-index:-1;
  background-size:cover;
}
.username,.password{
  border-radius: 30px;
  height: var(--loginInputHeight);
  width: 100%;
  border: none;
  opacity: 0.2;
  color: black;
}
.register-input{
  position: absolute;
  width: 80vw;
  height: 50vh;
  top: 25vh;
  left: 10vw;
  right: 10vw;
  bottom: 25vh;
}
.title{
  padding-left: 5px;
  margin: 10px 0px;
  text-align: left;
}
.register-btn{
  width: 100%;
  margin: 10px 0px;
  border-radius: 30px;
}
.gotoLogin{
  margin: 10px 0px;
}



</style>