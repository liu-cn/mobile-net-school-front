<template>
  <div class="category">
    <div class="icon-list">
      <div class="wraper">
        <van-icon name="fire-o" />
      </div>
      <div class="wraper">
        <van-icon name="fire-o" />
      </div>
      <div class="wraper">
        <van-icon name="fire-o" />
      </div>
      <div class="wraper">
        <van-icon name="fire-o" />
      </div>
    </div>
    <div class="title-list">
      <span class="title">热门</span>
      <span class="title">表白墙</span>
      <span class="title">作品</span>
      <span class="title">投稿</span>
    </div>

  </div>
</template>

<script>
export default {
name: "category"
}
</script>

<style scoped>
.icon-list{
  display: flex;
  justify-content: space-around;
}
.title-list{
  display: flex;
  justify-content: space-around;
}

</style>