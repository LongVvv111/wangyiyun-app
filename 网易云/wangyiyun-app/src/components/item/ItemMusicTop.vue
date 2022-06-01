<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgImg" />
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo-baise"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon_liebiao_baise"></use>
      </svg>
    </div>
    <div class="itemMusicIndex">
      <div class="box1">
        <img :src="playlist.coverImgUrl" alt="" />
        <span class="playCount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofangbaisex"></use>
          </svg>
          <span>{{ changeCount(playlist.playCount) }}</span>
        </span>
        <div class="text">
          <span class="title">{{ playlist.name }}</span>
          <span class="creator">
            <img :src="playlist.creator.backgroundUrl" alt="" />
            <span>{{ playlist.creator.nickname }}</span>
          </span>
          <span class="description"
            ><span>{{ playlist.description }}</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="itemTopfooter">
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(props) {
    // console.log(props);
    //props获取不到用sessionStorage
    if ((props.playlist.creator = "")) {
      props.playlist.creator = JSON.parse(
        sessionStorage.getItem().playlist
      ).creator;
    }
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    return { changeCount };
  },
  props: ["playlist"],
};
</script>
<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   padding: 10px;
  padding-top: 10px;
  position: relative;
  .bgImg {
    width: 100%;
    height: 300px;
    position: absolute;
    z-index: -1;
    position: fixed;
    filter: blur(30px);
  }
  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    span {
      font-size: 0.4rem;
      color: white;
    }
  }
  .itemMusicIndex {
    position: absolute;
    top: 50px;
    left: 0;
    .box1 {
      display: flex;
      justify-content: space-between;
      //   align-items: center;
      position: relative;
      img {
        width: 150px;
        height: 150px;
        padding: 5px;
        border-radius: 0.4rem;
      }
      .playCount {
        position: absolute;
        top: 10px;
        right: 235px;
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
      .text {
        display: flex;
        flex-direction: column;
        .title {
          color: white;
          margin: 5px;
        }
        .creator {
          position: relative;
          img {
            height: 50px;
            width: 50px;
            border-radius: 25px;
          }
          span {
            position: absolute;
            top: 12px;
            left: 50px;
            color: rgb(224, 216, 216);
          }
        }
        .description {
          display: flex;
          justify-content: space-between;

          span {
            width: 85%;
            height: 30px;
            font-size: 12px;
            padding-left: 5px;
            color: rgb(224, 216, 216);
            //   white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .icon {
            margin: 7px;
            padding: 5px;
            fill: aliceblue;
          }
        }
      }
    }
  }
  .itemTopfooter {
    position: absolute;
    top: 215px;
    left: 20px;
    display: flex;
    width: 90%;
    justify-content: space-between;
    // align-items: center;
    .footerItem {
      color: white;
      display: flex;
      flex-direction: column;
      .icon {
        fill: aliceblue;
      }
      span {
        margin-left: -3px;
      }
    }
  }
}
</style>