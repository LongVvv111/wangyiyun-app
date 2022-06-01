<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>

    <div class="topContent">
      <span @click="$router.push('/infoUser')">我的</span>
      <span>发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .topContent {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }
}
</style>