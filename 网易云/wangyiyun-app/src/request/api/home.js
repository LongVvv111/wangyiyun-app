import serivce from "..";
//获取轮播图
export function getBanner(){
    return serivce({
        method:"get",
        url:"/banner?type=2",
    })
}
//获取发现好歌单
export function getMusicList(){
    return serivce({
        method:"get",
        url:"/personalized?limit=10"
    })
}
//搜索
export function getSearchMusic(data){
    return serivce({
        method:"GET",
        url:`/search?keywords=${data}`
    })
}
//登录
export function getPhoneLogin(data){
    return serivce({
        method:"GET",
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
//获取用户详情
export function getLoginUser(data){
    return serivce({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}
