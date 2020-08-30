<template>
  <div class="centent-list">
    <vue-waterfall-easy :enablePullDownEvent="true" class="vue-waterfall-easy" :imgsArr="imglist" @scrollReachBottom="">
      <div class="img-info" slot-scope="props">
        <p class="some-info">第{{props.index+1}}张图片</p>
        <p class="some-info">{{props.value.info}}</p>
      </div>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import {imgList} from "@/util/mockData";
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  name: "contentList",
  data() {
    return {
      imglist: imgList
    }
  },
  components:{
    vueWaterfallEasy
  }
}
</script>

<style scoped>
  .centent-list{
    height: 100%;
  }
  .vue-waterfall-easy{
    height: 100%;
  }
</style>