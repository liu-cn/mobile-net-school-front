<template>
    <van-tabbar ref="tabbar" class="tabbar" v-model="active">
      <van-tabbar-item @click="tabClick" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item @click="tabClick" icon="search" dot>校友圈</van-tabbar-item>
      <van-tabbar-item @click="tabClick" icon="friends-o" badge="5">更多</van-tabbar-item>
      <van-tabbar-item @click="tabClick" icon="friends-o" badge="20">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import {Tabbar, TabbarItem} from "vant"

export default {
  name: "tabber",
  data() {
    return {
      active: 0,
      pathList:["home","friends","more","profile"]
    }
  },
  methods: {
    tabClick() {
      if (this.$route.path.indexOf(this.pathList[this.active])===-1){
        this.$router.replace(this.pathList[this.active])
      }

    }
  },
  created() {
    // console.log(this.$refs.tabbar)
  },
  mounted() {
    console.log(this.$refs.tabbar.$el.scrollHeight)
    this.$emit("tabbarLoad",this.$refs.tabbar.$el.scrollHeight)
  },

}
</script>

<style scoped>

</style>