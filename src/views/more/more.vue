<template>
  <BScroll :ScrollType="3" :pullUpLoad="true" ref="Scroll" class="main">
   <ul ref="wf" class="wf">
    <li ref="left_warp" class="wf-left-warp">
      <div v-for="(v,i) in imgArrA" :key="i" class="item">
        <img :src="v" @load="imgLoad(i)"  alt="">
      </div>
    </li>
    <li ref="right_warp" class="wf-right-warp">
      <div v-for="(v,i) in imgArrB"  :key="i"  class="item">
        <img :src="v" @load="imgLoad(i)" alt="">
      </div>
    </li>
  </ul>
  </BScroll>
</template>

<script>
import BScroll from "@/components/BScroll/BScroll";
import { imgList } from "@/util/mockData";
export default {
  name: "more",
  data() {
    return {
      page: 0,
      imglist: [],
      imgArrA: [],
      imgArrB: [],
    };
  },
  components: {
    BScroll,
  },
  methods: {
    getImgData(page) {
      return imgList[page];
    },
    init() {
      // 监听滚动事件
      this.$bus.$on("ScrollMove", (p) => {
      });
      //监听刷新高度事件
      this.$bus.$on("refHeight",()=>{
      this.$refs.Scroll && this.$refs.Scroll.Refresh()
    })
    },
    getScreenInfo(){

    },
    renderImg() {
      let imgdata = this.getImgData(this.page);
      for (let i = 0; i < imgdata.length;i++) {
        if (i % 2 === 0) {
          this.imgArrA.push(imgdata[i]);
        } else {
          this.imgArrB.push(imgdata[i]);
        }
      }
      this.$bus.$emit("refHeight")
    },
    imgLoad(i) {
      console.log(this.$refs.wf.style.height);
    },
  },
  created() {
    this.init();
    this.renderImg();
  },
  mounted() {
  },
};
</script>

<style>
.wf{
  position: relative;
  height: 10000px;
}
.wf-left-warp {
  width: 47vw;
  position: absolute;
  top: 0px;
  left: 2vw;
}
.wf-right-warp {
  position: absolute;
  width: 47vw;
  top: 0px;
  right: 2vw;
}
.item {
  overflow: hidden;
  padding: 1vw 0;
}
.item img {
  border-radius: 10px;
  display: block;
  width: 100%;
}
</style>