<template>
  <div>
    <TopNav />
    <SwpierTop />
    <IconList />
    <MusicList />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "../components/home/TopNav.vue";
import SwpierTop from "../components/home/SwpierTop.vue";
import IconList from "../components/home/IconList.vue";
import MusicList from "../components/home/MusciList.vue";

export default {
  name: "HomeView",
  components: {
    TopNav,
    SwpierTop,
    IconList,
    MusicList,
  },
};
</script>

<style lang="less" scoped>
</style>