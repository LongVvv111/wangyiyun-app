<template>
  <div>
    <ItemMusicTop :playlist="state.playlist" />
    <ItemMusicList
      :itemList="state.itemList"
      :subscribedCount="state.playlist.subscribedCount"
    />
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";
import { getMusicItemList, getItemList } from "../request/api/item";
import ItemMusicTop from "../components/item/ItemMusicTop.vue";
import ItemMusicList from "../components/item/ItemMusicList.vue";
export default {
  setup() {
    const state = reactive({
      playlist: {},
      itemList: [],
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      //获取歌单详情页
      let res = await getMusicItemList(id);
      state.playlist = res.data.playlist;
      //防止页面刷新导致数据丢失
      //获取歌曲
      let result = await getItemList(id);

      state.itemList = result.data.songs;
      //   console.log(state.itemList[0].id);
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
};
</script>