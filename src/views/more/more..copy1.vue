<template>
      <ul class="wf">
        <!-- <li class="item"><img src="http://video.liubr.com/1.webp" alt=""></li>
        <li class="item"><img src="http://video.liubr.com/2.webp" alt=""></li>
        <li class="item"><img src="http://video.liubr.com/3.webp" alt=""></li>
        <li class="item"><img src="http://video.liubr.com/4.webp" alt=""></li> -->
      </ul>
</template>

<script>
import {imgList} from '@/util/mockData'
export default {
  name:"more",
  data () {
    return {
      page:0,
      wfInfo:{
        spacing: 0,
        itemWidth: 0,
        imgArrHeight: [0,0],
        wfHeight:0,
      },
      screenInfo:{
        ScreenHeight:0,
        ScreenWidth:0,
        VisualHeight:0,
      },
      totalImg:0,
    }
  },
  methods:{
    //初始化
    init(){
      this.screenInfo.ScreenHeight = window.screen.availHeight
      this.screenInfo.ScreenWidth = window.screen.availWidth
      this.screenInfo.VisualHeight = window.screen.availHeight - 96
      this.wfInfo.itemWidth=this.screenInfo.ScreenWidth*0.47
      this.wfInfo.spacing=this.screenInfo.ScreenWidth*0.02
    },
    // 获取图片数据
    getImgData(page){
      return imgList[page]
    },
    RefreshWfHeight(){
     let wf= document.getElementsByClassName("wf")[0]
     console.log(wf.style.height);
     if (this.wfInfo.imgArrHeight[0]>this.wfInfo.imgArrHeight[1]) {
       wf.style.height=this.wfInfo.imgArrHeight[0]+"px"
     }else{
       wf.style.height=this.wfInfo.imgArrHeight[1]+"px"
     }
     this.$bus.$emit("refHeight")
     console.log("refHeight");
    },
    // 渲染图片列表
    renderImgList(Imglist){
      let wf =document.getElementsByClassName("wf")[0]
      for (let i = 0; i < Imglist.length; i++) {
        let oli=document.createElement("li")
        oli.className="item"
        let oimg=document.createElement("img")
        oimg.src=Imglist[i]
        oli.appendChild(oimg)
        wf.appendChild(oli)
        
        if (this.wfInfo.imgArrHeight[0]===0 || this.wfInfo.imgArrHeight[1]===0) {
          oli.style.top=0+"px"
          oli.style.left=i*this.wfInfo.spacing+i*this.wfInfo.itemWidth+this.wfInfo.spacing+"px"
          
          let oheight=oli.clientHeight+this.wfInfo.spacing
          this.wfInfo.imgArrHeight[i]+=oheight
          this.RefreshWfHeight()
        }else{
          if (this.wfInfo.imgArrHeight[0]<this.wfInfo.imgArrHeight[1]) {
            oli.style.top=this.wfInfo.imgArrHeight[0]+"px"
            oli.style.left=this.wfInfo.spacing+"px"
            let oheight=oli.clientHeight+this.wfInfo.spacing
            this.wfInfo.imgArrHeight[0]+=oheight
            console.log(oheight);
            this.RefreshWfHeight()
          }else{
            oli.style.top=this.wfInfo.imgArrHeight[1]+"px"
            oli.style.left=this.wfInfo.itemWidth+this.wfInfo.spacing*2+"px"
            let oheight=oli.clientHeight+this.wfInfo.spacing
            this.wfInfo.imgArrHeight[1]+=oheight
            console.log(oheight);
            this.RefreshWfHeight()
          }
        
      }
        
      }
      this.page++
      
    },
    //监听上拉加载更多，刷新滑动高度。
    listen(){

    },
    // 加载更多
    loadMore(){
      this.getImgData(this.page)
    },    
  },
  created () {
      this.init()
  },
  mounted () {
      this.renderImgList(this.getImgData(this.page))
  }
  
}
</script>

<style>
  .wf{
   position: relative; 
   /* height: 1000px; */
  }
  .item{
    position: absolute;
    width: 47vw;
    overflow: hidden;
    border-radius: 10px;
  }
  .item img{
    width: 100%;
    display: block;
  }

</style>