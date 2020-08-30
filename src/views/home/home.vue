<template>
  <div ref="" class="home">
    <swipe class="swipe"></swipe>
    <category class="category"></category>
  </div>
</template>

<script>
import swipe from "@/views/home/swipe/swipe";
import Category from "@/views/home/category/category";
export default {
  name: "home",
  components:{
    Category,
    swipe
  }

}
</script>

<style scoped>
  .home{
    position: relative;
  }
  .category{
    height: 10vh;
  }
  .content-list{
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: calc(46px + 30vh);
  }
</style>