<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

// 注册插件
BScroll.use(Pullup)
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
    this.Scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      scrollY: true,
      probeType:this.ScrollType,
      pullUpLoad:this.pullUpLoad
    })
    if (this.ScrollType==2 || this.ScrollType==3){
       console.log(this.ScrollType);
       this.Scroll.on('scroll',(position)=>{
         this.$bus.$emit('ScrollMove',position)
       })
     }

     if (this.pullUpLoad) {
       //监听滚动条滚到底部，执行上拉加载更多。
      this.Scroll.on('pullingUp',()=>{
        console.log('上拉加载更多')
        this.$bus.$emit('LoadMore')
      })
     }
  },
  methods:{
    refresh(){
        this.Scroll && this.Scroll.refresh()
      }
  }

}
</script>

<style scoped>

</style>