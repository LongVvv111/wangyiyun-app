import serivce from "..";
//获取歌单详情页
export function getMusicItemList(id){
    return serivce({
        method:"get",
        url:'/playlist/detail?id='+id
    })
}
//获取歌单歌曲
export function getItemList(id){
    return serivce({
        method:"get",
        url:'/playlist/track/all?id='+id+'&limit=10&offset=0'
    })
}
//获取歌曲的歌词
export function getMusicLyric(data){
    return serivce({
        method:"get",
        url:`/lyric?id=${data}`
    })
}

