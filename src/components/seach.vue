<template>
 <view>
   <!-- //搜索框 -->
   <navigator url="/pages/search/main" class="search">
   <view class="search-in">
     <icon class="search-icon" type="search" size="32rpx"></icon>
     搜索
   </view>
   </navigator>
</view>
</template>

<script>
export default {
 
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
</style>
