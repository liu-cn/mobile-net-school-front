<template>
  <div class="layout">
    <van-sticky>
      <navbar/>
    </van-sticky>
    <tabbar class="tabbar"/>

      <BScroll :ScrollType="3" :pullUpLoad="true" ref="Scroll" class="main">
          <keep-alive>
            <router-view/>
          </keep-alive>

      </BScroll>

  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";
import navbar from "@/components/navbar/navbar";
import BScroll from "@/components/BScroll/BScroll"

export default {
  name: "layout",
  components:{
    tabbar,
    navbar,
    BScroll
  },
  created() {
   
  },
  mounted(){
    this.$bus.$on("refHeight",()=>{
      console.log("refHeight")
      this.$refs.Scroll.refresh()
    })
  }
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