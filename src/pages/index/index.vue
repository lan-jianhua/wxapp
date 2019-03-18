<template>
 <view>
   <!-- //搜索框 -->
   <navigator url="/pages/search/main" class="search">
   <view class="search-in">
     <icon class="search-icon" type="search" size="32rpx"></icon>
     搜索
   </view>
   </navigator>
   <!-- 轮播图 -->
   <swiper
  indicator-dots
  autoplay
  circular
  interval="5000"
>
  <block v-for="(item,index) in imgUrls" :key="index">
    <swiper-item>
      <image :src="item" class="slide-image" width="355" height="150" />
    </swiper-item>
  </block>
</swiper>
<view class="cate">
  <block v-for="(item,index) in cate" :key="index">
    <image :src="item">

    </image>
  </block>
</view>
<!-- 分割盒子 -->
<view class="box">

</view>
 <view class="floor">
    <view class="floor-title">
      <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_title.png" mode="widthFix">
      </image>
    </view>
    <view class="floor-body">
      <view class="floor-left">
        <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_1@2x.png"></image>
      </view>
      <view class="floor-right">
       <block v-for="(item,index) in floorRight" :key="index">
          <image :src="item"></image>
       </block>
      </view>
    </view>
 </view>
 <!-- 户外运动商品 -->
<view class="box">

</view>
 <view class="floor">
    <view class="floor-title">
      <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor02_title.png" mode="widthFix">
      </image>
    </view>
    <view class="floor-body">
      <view class="floor-left">
        <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor02_1@2x.png"></image>
      </view>
      <view class="floor-right">
       <block v-for="(item,index) in floorRight1" :key="index">
          <image :src="item"></image>
       </block>
      </view>
    </view>
 </view>
 <!-- //包包商品 -->
 <view class="box">

</view>
 <view class="floor">
    <view class="floor-title">
      <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor03_title.png" mode="widthFix">
      </image>
    </view>
    <view class="floor-body">
      <view class="floor-left">
        <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor03_1@2x.png"></image>
      </view>
      <view class="floor-right">
       <block v-for="(item,index) in floorRight2" :key="index">
          <image :src="item"></image>
       </block>
      </view>
    </view>
 </view>
 </view>
</template>

<script>
export default {
  data () {
    return {
       imgUrls: [
      'https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/banner1.png',
      'https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/banner2.png',
      'https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/banner3.png'
    ],
    cate:[
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_4@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_3@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_2@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_1@2x.png"
    ],
    floorRight:[
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_2@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_3@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_4@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_5@2x.png"
    ],
    floorRight1:[
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor02_2@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor02_3@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor02_4@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor02_5@2x.png"
    ],
    floorRight2:[
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor03_2@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor03_3@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor03_4@2x.png",
      "https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor03_5@2x.png"
    ]
    }
  }
}
</script>

<style>
.search{
  background-color: #eb4450;
  padding: 20rpx;
}
.search-in{
  height: 60rpx;
  background-color: #fff;
  border-radius: 10rpx; 
  color:#666;
  font-size: 30rpx;
  /* text-align: center;
  line-height: 60rpx; */
  display: flex;
  justify-content: center;
  align-items: center;
}
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
  height: 140rpx;
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
