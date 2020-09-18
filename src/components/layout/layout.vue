<template>
  <div class="layout">
    <van-sticky>
      <navbar/>
    </van-sticky>
    <tabbar class="tabbar"/>


      <keep-alive>
            <router-view/>
          </keep-alive>

  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";
import navbar from "@/components/navbar/navbar";


export default {
  name: "layout",
  components:{
    tabbar,
    navbar,
  },
  }
</script>

<style>
  .main{
    position: absolute;
    top: 46px;
    bottom: 50px;
    left: 0px;
    right: 0px;
    /*overflow: hidden;*/
    overflow: scroll;
  }

</style>