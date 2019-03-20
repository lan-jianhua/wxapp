<template>
<view>
  <seach></seach>
  <view class="crte">
    <scroll-view scroll-y class="crte-left">
      <block v-for="(item,index) in cate" :key="index">
      <view class="title" :class="{active:index===tabIndex}" @tap="cut(index)">
        {{item.cat_name}}
      </view>
      </block>
    </scroll-view>
     <scroll-view scroll-y class="crte-right">
       <block v-for="(item,index) in rightlist" :key="index">
       <view class="right-title">{{item.cat_name}}</view>
       <view class="right-shangping">
         <block v-for="(subitem,subindex) in item.children" :key="subindex">
       <view class="right-list" @tap="goodList(subitem.cat_name)"> 
         <image :src="subitem.cat_icon"></image>
         <view>{{subitem.cat_name}}</view>
       </view>
         </block>
       </view>
      </block>
     </scroll-view>
  </view>
  </view>
</template>

<script>
//引入主件
import Seach from "../../components/seach";
import request from "../../utils/request.js"
export default {
data () {
  return {
      tabIndex:0,
      cate:[],
      rightlist:[]
  }
},
onLoad(){
  wx.showLoading({
    title: '努力加载中', //提示的内容,
    mask: true, //显示透明蒙层，防止触摸穿透,
  });
  request.get("categories").then(res=>{
    this.cate=res.data.message;
    this.rightlist=this.cate[this.tabIndex].children;
   wx.hideLoading();
  })
},
//注册组件
components: {
  Seach
},
methods: {
   cut(index){
    this.tabIndex=index;
     this.rightlist=this.cate[this.tabIndex].children;
   },
   goodList(name){
     wx.navigateTo({ url: '/pages/goodlist/main'+'?keyword='+name });
   }
}
}
</script>

<style>
.crte{
  position: fixed;
  top: 100rpx;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
}
.crte-left{
  width: 200rpx;
  height: 100%;
  background-color: #f4f4f4;
}
.title{
  height: 88rpx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height:88rpx;

}
.crte-left .title.active{
  background-color: #fff;
  color: red;
}
.crte-right{
  flex: 1;
  /* background-color: red; */
}
.right-list image{
  width: 120rpx;
  height: 120rpx;
}
.right-list{
  width: 33.3%;
  font-size: 30rpx;
}
.right-shangping{
  display: flex;
  flex-wrap: wrap;
}
.right-title{
  text-align: center;
  padding: 40rpx 0;
}
</style>
