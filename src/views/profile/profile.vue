<template>
  <div class="profile">
    <form method="post" id="form" enctype="multipart/form-data" action="http://192.168.1.202:8080/upload">
      <input type="file" id="files" multiple name="file">
      <button type="submit">上传</button>
    </form>
    <button @click="btnclick" class="btn">查看文件对象</button>
    <button @click="uploadQiniu" class="btn">七牛上传</button>
    <button @click="test" class="btn">test</button>
    <div class="wrap">
      <div class="percent">{{percent}}%</div>
    </div>
  </div>
</template>

<script>
import * as qiniu from "qiniu-js"
export default {
  name: "profile",
  data () {
    return {
      percent:0
    }
  },
  methods:{
    test(){
      this.percent=10
    },
    btnclick(){
      let form=document.getElementById("form")
      let fd =new FormData(form)
      console.log(fd.getAll("file"))
      console.log(fd.get("file"))
    },

    uploadQiniu(){
      let self=this
      //上传空间的url
      let url="http://cdn.liubr.com/"
      //获取上传token
      this.$ajax.post("http://192.168.1.202:8080/getqiniutoken",{}).then(res=>{
        console.log(res)
       let token=res.data.qiniuToken
        console.log(token)
        //获取上传文件
        let file = document.getElementById("files").files[0]
        //配置上传参数
        const observable = qiniu.upload(file, null, token, {}, {
          useCdnDomain:false,
          region:qiniu.region.z0,
        })
        //上传
        const subscription = observable.subscribe({
          next(info){
            console.log("info:=",info)
            let div=document.getElementsByClassName("percent")[0]
            console.log(div)

            let DivWidth=parseFloat(info.total.percent.toFixed(0))
            self.percent=DivWidth
            console.log(DivWidth)
            div.style.width=DivWidth+"%"
            console.log(div.style.width)
          },
          error(err){
            console.log(err)
          },
          complete(finish){
            console.log("完成：",finish)
            console.log("url:=",url+finish.key)
            console.log("5555555",subscription)
          }
        })

      })

    }
  }

}
</script>

<style scoped>
  .wrap{
    width: 99vw;
    height: 30px;
    border: 1px solid gray;
    text-align: center;
  }
  .percent{
    height: 100%;
    width: 0;
    background-color: green;
    text-align: center;
  }
</style>