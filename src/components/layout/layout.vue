<template>
  <div class="layout">
    <van-sticky>
      <navbar/>
    </van-sticky>
    <tabbar class="tabbar"/>

      <BScroll class="main">
<!--        <div class="main">-->
          <keep-alive>
            <router-view/>
          </keep-alive>
<!--        </div>-->
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
    this.$bus.$on("tabbarLoad",(height)=>{

    })
    this.$bus.$on("navbarLoad",(height)=>{

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