<template>
  <div class="itemmusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span
          >播放全部<span>(共{{ itemList.length }}首)</span></span
        >
      </div>
      <div class="listRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tianjia-baise"></use>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in itemList" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div class="rightSpan">
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon" aria-hidden="true" v-if="item.mv != 0">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  setup(props) {
    console.log(props);
    //props获取不到用sessionStorage
  },
  props: ["itemList", "subscribedCount"],
  methods: {
    playMusic: function (i) {
      this.updatePlayList(this.itemList);
      this.updatePlayListIndex(i);
    },
    ...mapMutations(["updatePlayList", "updatePlayListIndex"]),
  },
};
</script>

<style lang="less" scoped>
.itemmusicList {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  padding: 0 0.2rem;
  margin-top: 10px;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listLeft {
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .listRight {
      margin-top: 10px;
      //   width: 2.5rem;
      height: 35px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: red;
      border-radius: 20px;
      color: #fff;
      .icon {
        fill: #fff;
        padding: 5px;
      }
    }
  }
  .itemList {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      height: 70px;
      .itemLeft {
        display: flex;
        // justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 70%;
        .leftSpan {
          margin-left: 5px;
        }
        .rightSpan {
          margin-left: 15px;
          span {
            font-size: 12px;
            color: rgb(197, 194, 194);
          }
        }
      }
      .itemRight {
        .icon {
          margin-right: 10px;
          padding: 2px;
        }
      }
    }
  }
}
</style>