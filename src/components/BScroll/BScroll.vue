<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: "Scroll",
  data(){
    return{
      Scroll:null
    }
  },
  props:{
    // 滚动类型，
    ScrollType:{
      type:Number,
      default(){
        return 0
      }
    },
    //是否使用上拉加载更多
    pullUpLoad:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      scrollY: true,
      probeType:this.ScrollType,
      pullUpLoad:this.pullUpLoad
    })
  }

}
</script>

<style scoped>

</style>