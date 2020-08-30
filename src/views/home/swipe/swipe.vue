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
      imglist:["https://pic.downk.cc/item/5f453a6b160a154a678a3cf0.jpg","https://pic.downk.cc/item/5f453b5a160a154a678abecb.jpg",
        "https://pic.downk.cc/item/5f453b75160a154a678acf4f.jpg","https://pic.downk.cc/item/5f453b8a160a154a678ad9b9.jpg",
        "https://pic.downk.cc/item/5f453b9f160a154a678ae76c.jpg"]
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