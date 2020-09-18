<template>
  <div class="test">

  </div>
</template>

<script>
import {video} from "@/util/global";

export default {
  name: "test",
  mounted() {
    this.$ajax.post(video,{}).then(res=>{
      console.log(res)
    })
  }

}
</script>

<style>
</style>