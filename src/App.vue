<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import layout from "@/components/layout/layout"
export default {
  name:"App",
  components:{
    layout
  }
  
}
</script>


<style scoped>
#app{
  font-family: NotoSansCJK-Thin-2;
}

</style>
