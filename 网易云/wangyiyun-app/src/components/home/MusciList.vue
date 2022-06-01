<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swipe"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofangbaisex"></use>
              </svg>
              <span>{{ changeCount(item.playCount) }}</span>
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
import { getMusicList } from "../../request/api/home";
export default {
  //   data() {
  //     return {
  //       musicList: [],
  //     };
  //   },
  //   mounted() {
  //     this.getGedan();
  //   },
  //   methods: {
  //     async getGedan() {
  //       let res = await getMusicList();
  //       console.log(res);
  //       this.musicList = res.data.result;
  //     },
  //     changeCount: function (num) {
  //       if (num >= 100000000) {
  //         return (num / 100000000).toFixed(1) + "亿";
  //       } else if (num >= 10000) {
  //         return (num / 10000).toFixed(1) + "万";
  //       }
  //     },
  //   },
  setup() {
    const state = reactive({
      musicList: [],
    });
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    onMounted(async () => {
      let res = await getMusicList();
      state.musicList = res.data.result;
    });
    return { state, changeCount };
  },
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 10px;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 10px;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 200px;
    .my-swipe {
      height: 100%;
      .van-swipe-item {
        position: relative;
        img {
          // width: 100%;
          // height: 100%;
          width: 150px;
          height: 150px;
          padding: 5px;
          border-radius: 0.4rem;
        }
        .playCount {
          position: absolute;
          top: 10px;
          right: 10px;
          color: whitesmoke;
          .icon {
            position: absolute;
            top: 0px;
            right: 60px;
          }
          span {
            position: absolute;
            top: 3px;
            right: -10px;
            width: 70px;
          }
        }
      }
    }
  }
}
</style>