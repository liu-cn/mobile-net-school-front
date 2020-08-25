<template>
  <van-nav-bar ref="navbar" title="标题" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
name: "navbar",
  mounted() {
    console.log(this.$refs.navbar.$el.scrollHeight);
    // this.$emit("")
  }
}
</script>

<style scoped>

</style>