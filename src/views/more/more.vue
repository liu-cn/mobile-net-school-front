<template>
  <div class="wf">
    <div v-for="i in imglength" :key="i" class="img-wrape">
      <img :src="cdn+i+'.webp'" class="imgitem" alt="">
    </div>
  </div>
</template>

<script>
import {imgList} from '@/util/mockData'
export default {
  name: "more",
  data() {
    return {
      imglength:10,
      cdn:"http://qfpsuhauc.hd-bkt.clouddn.com/",
      ScreenWidth:0,
      ScreenHeight:0,
      imgItemList:[],
      imgArrHeight:[],
      spacing:0,
      itemWidth:0,
      wf:null,
      wfHeight:0,
      VisualHeight:0,
    }
  },
  methods: {
    loadMore(){
      
    },
    loadMoreImg(imglist){
      
      for(let i=0;i<imglist.length;i++){
        
        let imgWrp=document.createElement("div")
        imgWrp.className="img-wrape"
        imgWrp.style.width=47+"vw"

        let oimg =new Image()
        oimg.src=imglist[i]
        oimg.className="imgitem"
        oimg.style.width="100%"
        
        imgWrp.appendChild(oimg)
   
        this.wf.appendChild(imgWrp)

        if(this.imgArrHeight[0]<this.imgArrHeight[1]){
            imgWrp.style.top=this.imgArrHeight[0]+this.spacing+"px"
            imgWrp.style.left=this.spacing+"px"
            this.imgArrHeight[0] += imgWrp.offsetHeight+this.spacing
            this.wf.style.height=this.imgArrHeight[1]+"px"
            // this.refsHeight()
          }else{
            imgWrp.style.top=this.imgArrHeight[1]+this.spacing+"px"
            imgWrp.style.left=this.itemWidth+2*this.spacing+"px"
            this.imgArrHeight[1]+= imgWrp.offsetHeight+this.spacing
            this.wf.style.height=this.imgArrHeight[0]+"px"
            // this.refsHeight()
          }
          
        this.$bus.$emit("refHeight")
        }

    },
    resizeWidth(){
      this.ScreenHeight=window.screen.availHeight
      this.ScreenWidth=window.screen.availWidth
    },
    refsHeight(){
      if (this.imgArrHeight[0]>this.imgArrHeight[1]) {
        this.wf.style.height=this.imgArrHeight[0]+"px"
      }
      if (this.imgArrHeight[0]<this.imgArrHeight[1]) {
         this.wf.style.height=this.imgArrHeight[1]+"px"
      }
      if (this.imgArrHeight[0]===this.imgArrHeight[1]) {
         this.wf.style.height=(this.imgArrHeight[1]+10)+"px"
      }
      
    },
    init(){
      // 监听手机屏幕发生旋转时改变屏幕大小
      window.addEventListener("resize",this.resizeWidth)
      // 获取手机宽度px
      this.ScreenHeight=window.screen.availHeight
      this.ScreenWidth=window.screen.availWidth
      this.VisualHeight=window.screen.availHeight-96
      console.log(this.VisualHeight);

      //获取wf瀑布流父容器对象
      this.wf=document.getElementsByClassName("wf")[0]
      // 获取图片item
      this.imgItemList=document.getElementsByClassName("img-wrape")
      
      // 初始化变量,瀑布流间隙宽度，瀑布流图片宽度
      this.spacing=this.ScreenWidth*0.02
      this.itemWidth=this.ScreenWidth*0.47

      for (let i = 0; i < this.imgItemList.length; i++) {
        if(this.imgArrHeight.length<2){
          this.imgItemList[i].style.top="0px"
          this.imgItemList[i].style.left=i*this.itemWidth+(i+1)*this.spacing+"px"
          this.imgArrHeight[i]=this.imgItemList[i].offsetHeight
        }else{
          if(this.imgArrHeight[0]<this.imgArrHeight[1]){
            this.imgItemList[i].style.top=this.imgArrHeight[0]+this.spacing+"px"
            this.imgItemList[i].style.left=this.spacing+"px"
            this.imgArrHeight[0] += this.imgItemList[i].offsetHeight+this.spacing
            this.refsHeight()
          }else{
            this.imgItemList[i].style.top=this.imgArrHeight[1]+this.spacing+"px"
            this.imgItemList[i].style.left=this.itemWidth+2*this.spacing+"px"
            this.imgArrHeight[1]+= this.imgItemList[i].offsetHeight+this.spacing
            this.refsHeight()
          }
        }  
    }
    }
  },
  mounted(){
    console.log(imgList);
    this.init()
    // 监听滚动事件
    this.$bus.$on("ScrollMove",(position)=>{
      console.log(document.getElementsByClassName("wf")[0].clientHeight);
      if(this.imgArrHeight[0]>=this.wf.offsetHeight){
        this.wf.style.height=this.imgArrHeight[0]+1+"px"
        this.$bus.$emit("refHeight")
      }   
    })
    this.$bus.$on("LoadMore",()=>{
      console.log("LoadMore");
      this.loadMoreImg(imgList)
      this.$bus.$emit("refHeight")
    })
  }
}
</script>

<style>
.wf{
  position: relative;
  /* height: 1000px; */
  /* background-color: red; */
}
.img-wrape{
  position: absolute;
  width: 47vw;
  overflow: hidden;
  border-radius: 10px;
}
.imgitem{
  width: 100%;
  display: block;
  overflow: hidden;
}
</style>