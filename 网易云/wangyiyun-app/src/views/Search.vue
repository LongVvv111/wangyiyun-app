<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou1"></use>
    </svg>
    <input
      type="text"
      placeholder="陈奕迅"
      v-model="searchKey"
      @keydown.enter="enterKey"
    />
  </div>
  <div class="searchHistory">
    <span>历史</span>
    <span
      v-for="item in keyWorldList"
      :key="item"
      class="spanKey"
      @click="searchHistory(item)"
    >
      {{ item }}
    </span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
  <div class="itemList">
    <div class="item" v-for="(item, i) in searchList" :key="i">
      <div class="itemLeft" @click="updateIndex(item)">
        <span class="leftSpan">{{ i + 1 }}</span>
        <div class="rightSpan">
          <p>{{ item.name }}</p>
          <span v-for="(item1, index) in item.artists" :key="index">{{
            item1.name
          }}</span>
        </div>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true" v-if="item.mvid != 0">
          <use xlink:href="#icon-shipin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getSearchMusic } from "../request/api/home";
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: "",
      searchList: [],
    };
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey !== "") {
        this.keyWorldList.unshift(this.searchKey);
        //   去重
        this.keyWorldList = [...new Set(this.keyWorldList)];
        // 固定长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
        }
        localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
        let res = await getSearchMusic(this.searchKey);
        console.log(res);
        this.searchList = res.data.result.songs;
        this.searchKey = "";
      }
    },
    delHistory: function () {
      localStorage.removeItem("keyWorldList");
      this.keyWorldList = [];
    },
    searchHistory: async function (item) {
      let res = await getSearchMusic(item);
      console.log(res);
      this.searchList = res.data.result.songs;
      this.searchKey = "";
    },
    updateIndex: function (item) {
      item.al = item.album;
      item.al.picUrl = item.album.artist.img1v1Url;
      //   this.$store.commit("pushPlayList", item);
      this.pushPlayList(item);
      //   this.$store.commit(
      //     "updatePlayListIndex",
      //     this.$store.state.playList.length - 1
      //   );
      this.updatePlayListIndex(this.$store.state.playList.length - 1);
    },
    ...mapMutations(["pushPlayList", "updatePlayListIndex"]),
  },
};
</script>
<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 0.2rem;
    border: none;
    border-bottom: 1px solid #999;
    width: 90%;
    padding: 0.1rem;
  }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .searchSpan {
    font-weight: 700;
  }
  .spanKey {
    padding: 0.1rem 0.2rem;
    background-color: rgb(185, 169, 169);
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 0.2rem;
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
      //   justify-content: space-between;
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
</style>