<template>
  <view class="s">
    商品详情列表{{goods_id}}
    
  </view>
</template>

<script>
export default {
data () {
  return {
    goods_id:''
  }
},
onLoad(query){
  this.goods_id=query.goods_id;
}
}
</script>

<style>

</style>
