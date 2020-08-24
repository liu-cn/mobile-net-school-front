<template>
  <div class="login">
    <div class="login-input">
      <div class="title">账号</div>
      <input v-model="username" placeholder="请输入账号/手机号/邮箱/用户名" class="username" type="text">
      <div class="title">密码</div>
      <input v-model="password" placeholder="请输入密码" class="password" type="text">
      <div class="forgetAndRegister">
        <div class="register" @click="register">立即注册</div>
        <div class="forget">忘记密码？</div>

      </div>
      <van-button @click="loginClick" class="login-btn" color="linear-gradient(to right, #ff6034, #ee0a24)">登录</van-button>
    </div>
  </div>
</template>

<script>
import {loginApiPath} from "@/util/global";
// import {Button,Notify} from "vant"



export default {
  name: "login",
  components:{

  },
  data() {
    return {
      username: "",
      password:"",
    }
  },
  methods: {
    loginClick() {
      if (this.username==="" || this.password===""){
        this.$notify({message:"账号和密码不能为空！",background:"#ff0033"})
        return
      }
      this.$ajax.post(loginApiPath,{
        username : this.username,
        password : this.password,
      }).then((res)=>{
        console.log(res.data)
        if (res.data.LoginStatus === "failed"){
          this.$notify("账号或密码错误，请重新输入！")
        }else {
          this.token=res.data.token
          localStorage.setItem("token",res.data.token)
          localStorage.setItem("username",res.data.username)
          console.log(localStorage.getItem("username"));
          this.$notify({message:"登录成功！",background:"#33ff66"})
          this.$router.replace("/")
        }
      })
    },
    register(){
      this.$router.replace("/register")
    }
  },
}
</script>

<style scoped>
.login{
  width:100vw;
  height:100vh;
  position:relative;
  text-align:center;
  line-height:100%;
  color:white;
}
.login::before{
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
.login-input{
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
.login-btn{
  width: 100%;
  margin: 10px 0px;
  border-radius: 30px;
}
.forgetAndRegister{
  margin: 10px 0px;
}
.forgetAndRegister div{
  width: 50%;
  display: inline-block;
}
.forget{
  width: 50%;
  text-align: right;
}
.register{
  width: 50%;
  text-align: left;
}

</style>