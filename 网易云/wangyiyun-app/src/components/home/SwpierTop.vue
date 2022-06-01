<template>
  <div id="swpierTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import axios from "axios";
import { getBanner } from "../../request/api/home";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      images: [],
    });
    onMounted(async () => {
      //   axios.get("http://localhost:3000/banner?type=2").then((res) => {
      //     console.log(res);
      //     state.images = res.data.banners;
      //     console.log(state.images);
      //   });
      let res = await getBanner();
      //   console.log(res);
      state.images = res.data.banners;
    });
    return { state };
  },
};
</script>
<style lang="less" scoped>
#swpierTop {
  .van-swipe {
    width: 100%;
    height: 150px;
    padding: 10px;
    .van-swipe-item {
      //   padding-left: 10px;
      padding-right: 20px;
      img {
        width: 100%;
        height: 150px;
        border-radius: 10px;
      }
    }
  }
}
</style>