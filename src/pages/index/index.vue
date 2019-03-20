<template>
 <view>
<seach></seach>
   <!-- 轮播图 -->
   <swiper
  indicator-dots
  autoplay
  circular
  interval="5000"
>
  <block v-for="(item,index) in imgUrls" :key="index">
    <swiper-item>
      <image :src="item.image_src" class="slide-image" width="355" height="150" />
    </swiper-item>
  </block>
</swiper>
<view class="cate">
  <block v-for="(item,index) in cate" :key="index">
    <image :src="item.image_src">

    </image>
  </block>
</view>

 <!-- //包包商品 -->
 <block v-for="(item1,index1) in floortitle" :key="index1">
 <view class="box">
</view>
 <view class="floor">
    <view class="floor-title">
      <image :src="item1.floor_title.image_src" mode="widthFix">
      </image>
    </view>
    <view class="floor-body">
      <view class="floor-left">
        <image :src="item1.product_list[0].image_src"></image>
      </view>
      <view class="floor-right">
       <block v-for="(item,index) in item1.product_list" :key="index">
          <image v-if="index!=0" :src="item1.product_list[index].image_src"></image>
       </block>
      </view>
    </view>
 </view>
 </block>
 </view>
</template>

<script>
import Seach from "../../components/seach"
export default {
  data () {
    return {
    //    imgUrls: [
    //   // 'https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/banner1.png',
    //   // 'https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/banner2.png',
    //   // 'https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/banner3.png'
    // ],
    imgUrls:[],
    cate:[
      // "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_4@2x.png",
      // "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_3@2x.png",
      // "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_2@2x.png",
      // "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_1@2x.png"
    ],
    floortitle:[],
    floorRight:[]
    }
  },
  components: {
    Seach
  },
  onLoad(){
  wx.request({
    url: "https://autumnfish.cn/wx/api/public/v1/home/swiperdata", //开发者服务器接口地址",
    method: 'GET',
    success: res => {
      console.log(res)
      this.imgUrls=res.data.message
    },
  });
  wx.request({
    url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems', //开发者服务器接口地址",
    success: res => {
      console.log(res)
      this.cate=res.data.message
    },
  });
  //请求楼层数据
  wx.request({
    url: 'https://www.zhengzhicheng.cn/api/public/v1/home/floordata', //开发者服务器接口地址",
    method: 'GET',
    success: res => {
      console.log(res)
      this.floortitle=res.data.message;
    },

  });
  }
}
</script>

<style>

/* 轮播图部分 */
swiper-item image{
  width: 750rpx;
  height: 340rpx;
}
swiper{
  height: 340rpx;
}
.cate{
  display: flex;
  height: 180rpx;
  justify-content: space-around;
  align-items: center;
}
.cate image{
  width: 128rpx;
  height: 110rpx;
}
.box{
  height: 20rpx;
  background-color: #f4f4f4;
}
.floor-title image{
  width: 750rpx;
  height: 60rpx;
  background-color: #f4f4f4;
}
.floor-body{
  display: flex;
   padding: 10rpx 0 20rpx 20rpx;
}
.floor-left image{
  width: 232rpx;
  height: 386rpx;
  margin-right: 10rpx;
}
.floor-right image{
  width: 232rpx;
  height: 188rpx;
margin-right: 10rpx;
}
</style>
