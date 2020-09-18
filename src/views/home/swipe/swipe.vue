<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">

    <van-swipe-item v-for="(v,i) in imglist" :key="i"><img class="swipeImg" :src="v" alt=""></van-swipe-item>

  </van-swipe>
</template>

<script>
export default {
  name: "swipe",
  data(){
    return{
      imglist:["http://video.liubr.com/1.webp","http://video.liubr.com/4.webp",
        "http://video.liubr.com/6.webp","http://video.liubr.com/7.webp",
        "http://video.liubr.com/2.webp"]
    }
  }
}
</script>

<style scoped>
  .my-swipe{
    height: 20vh;
    background-color: aquamarine;
    border-radius: 10px;
    margin: 5px;
  }
  .swipeImg{
    width:100%;
    /*height: 100%;*/
    max-width:100%;
  }

</style>