<template>
<div class="profile">
  import Vue from 'vue'
  import App from './App.vue'
  import './registerServiceWorker'
  import router from './router/index.js'
  import store from './store'
  import VantUi from "./VantUi"


  import axios from "axios"

  import("@/assets/css/normalize.css")
  import("@/assets/css/global.css")
  import ("@/assets/css/font/font.css")
  <div>使用字体：SourceCodePro-Light</div>
</div>
</template>

<script>
export default {
  name: "profile",

}
</script>

<style scoped>
  .profile{
    font-family: SourceCodePro-Light,SourceHanSansOLD-Light-2;
  }
</style>