<template>
  <div ref="wf" class="wf">
    <div v-for="(v,i) in imglist" :style="{}" :key="i" class="img-wrape">
      <img :src="v" class="imgitem" alt />
    </div>
  </div>
</template>

<script>
import { imgList } from "@/util/mockData";
export default {
  name: "more",
  data() {
    return {
      imglist: [],
      ScreenWidth: 0,
      ScreenHeight: 0,
      imgItemList: [],
      imgArrHeight: [],
      spacing: 0,
      itemWidth: 0,
      wf: null,
      wfHeight: 0,
      VisualHeight: 0,
      pageidx: 0,
      currImgIdx:0
    };
  },
  computed(){
    // thistop(i){
    //   // document.g
    // }
  },
  methods: {
    loadMore() {},
    // 上拉加载更多
    loadMoreImg(imglist) {
      this.pageidx++;
      this.imglist.push(...imgList[this.pageidx]);
      for (let i = 0; 1 < imgList[this.pageidx].length; i++) {
        this.imglist.push(imgList[this.pageidx][i])
        console.log(this.imgItemList.length);
        // this.$refs.wf.childNodes[]
        this.renderImg(imgList[this.pageidx].length*this.pageidx+i)
      }
      console.log(this.imgItemList);
      console.log(this.imgItemList.length);
      // this.renderImg();
      this.$bus.$emit("refHeight");
    },
    renderImg(i){
      console.log(i);
      console.log(this.$refs.wf.childNodes);
      console.log(this.$refs.wf.childNodes[i]);
      console.log(this.$refs.wf.childNodes.length);
      if (this.imgArrHeight[0] < this.imgArrHeight[1]) {
            this.$refs.wf.childNodes[i].style.top =
              this.imgArrHeight[0] + this.spacing + "px";
             this.$refs.wf.childNodes[i].style.left = this.spacing + "px";
            this.imgArrHeight[0] +=
              this.$refs.wf.childNodes[i].offsetHeight + this.spacing;
            this.refsHeight();
            this.currImgIdx++
          } else {
            this.$refs.wf.childNodes[i].style.top =
              this.imgArrHeight[1] + this.spacing + "px";
           this.$refs.wf.childNodes[i].style.left =
              this.itemWidth + 2 * this.spacing + "px";
            this.imgArrHeight[1] +=
              this.$refs.wf.childNodes[i].offsetHeight + this.spacing;
            this.refsHeight();
          }
    },

    renderImglist() {
      for (
        let i = this.pageidx * imgList[this.pageidx].length;
        i < this.imgItemList.length;
        i++
      ) {
        if (this.imgArrHeight.length < 2) {
          this.imgItemList[i].style.top = "0px";
          this.imgItemList[i].style.left =
            i * this.itemWidth + (i + 1) * this.spacing + "px";
          this.imgArrHeight[i] = this.imgItemList[i].offsetHeight;
          this.currImgIdx++
        } else {
          if (this.imgArrHeight[0] < this.imgArrHeight[1]) {
            this.imgItemList[i].style.top =
              this.imgArrHeight[0] + this.spacing + "px";
            this.imgItemList[i].style.left = this.spacing + "px";
            this.imgArrHeight[0] +=
              this.imgItemList[i].offsetHeight + this.spacing;
            this.refsHeight();
            this.currImgIdx++
          } else {
            this.imgItemList[i].style.top =
              this.imgArrHeight[1] + this.spacing + "px";
            this.imgItemList[i].style.left =
              this.itemWidth + 2 * this.spacing + "px";
            this.imgArrHeight[1] +=
              this.imgItemList[i].offsetHeight + this.spacing;
            this.refsHeight();
            this.currImgIdx++
          }
        }
      }
    },
    init() {
      // 监听手机屏幕发生旋转时改变屏幕大小
      window.addEventListener("resize", this.resizeWidth);
      // 获取手机宽度px
      this.ScreenHeight = window.screen.availHeight;
      this.ScreenWidth = window.screen.availWidth;
      this.VisualHeight = window.screen.availHeight - 96;

      //获取wf瀑布流父容器对象
      this.wf = document.getElementsByClassName("wf")[0];
      // 获取图片item
      this.imgItemList = document.getElementsByClassName("img-wrape");
      console.log(this.imgItemList);
      console.log(this.imgItemList.length);

      // 初始化变量,瀑布流间隙宽度，瀑布流图片宽度
      this.spacing = this.ScreenWidth * 0.02;
      this.itemWidth = this.ScreenWidth * 0.47;
      this.renderImglist();
    },
    refsHeight() {
      if (this.imgArrHeight[0] > this.imgArrHeight[1]) {
        this.wf.style.height = this.imgArrHeight[0] + "px";
      }
      if (this.imgArrHeight[0] < this.imgArrHeight[1]) {
        this.wf.style.height = this.imgArrHeight[1] + "px";
      }
      if (this.imgArrHeight[0] === this.imgArrHeight[1]) {
        this.wf.style.height = this.imgArrHeight[1] + 10 + "px";
      }
    },
    resizeWidth() {
      this.ScreenHeight = window.screen.availHeight;
      this.ScreenWidth = window.screen.availWidth;
    },
  },
  created() {
    this.imglist.push(...imgList[this.pageidx]);
  },
  mounted() {
    this.init();
    // 监听滚动事件
    this.$bus.$on("ScrollMove", (position) => {
      if (this.imgArrHeight[0] >= this.wf.offsetHeight) {
        this.wf.style.height = this.imgArrHeight[0] + 1 + "px";
        this.$bus.$emit("refHeight");
      }
    });
    this.$bus.$on("LoadMore", () => {
      console.log("LoadMore");
      this.loadMoreImg(imgList);
      this.$bus.$emit("refHeight");
    });
  },
};
</script>

<style>
.wf {
  position: relative;
}
.img-wrape {
  position: absolute;
  width: 47vw;
  overflow: hidden;
  border-radius: 10px;
}
.imgitem {
  width: 100%;
  display: block;
  overflow: hidden;
}
</style>