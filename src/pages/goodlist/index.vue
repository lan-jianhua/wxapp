<template>
<view>
  <view class="search-wrapper">
        <view class="search-input" @tap="getsearch(keyword)">
            <icon type="search" size="32rpx"></icon>
            {{keyword}}
        </view>
    </view>
    <!-- tab栏 -->
    <view class="tab">
      <block v-for="(item,index) in tabTitle" :key="index">
      <view class="tab-item" :class="{active:index===tabIndex}">
        {{item}}
      </view>
      </block>
    </view>
    <view class="goods-list">
        <block v-for="(item,index) in goodsList" :key="index">
        <view class="goods-item" @tap="getdetails(item.goods_id)">
            <image :src="item.goods_small_logo"></image>

            <view class="goods-right">
                            <view class="goods-title">
                {{item.goods_name}}
            </view>
                        <view class="price">
               ￥ {{item.goods_price}}
            </view>
            </view>

        </view>
           </block>
    </view>
 <view class="loading" v-show="!getmax">
     没有了小哥哥
 </view>
    </view>
</template>

<script>
import request from "../../utils/request.js"
console.log(request)
export default {
data () {
  return {
    keyword:'',
    tabTitle:["综合","销量","价格"],
    tabIndex:0,
     goodsList:[],
     pagenum:1,
     pagesize:20,
     getmax:true
  }
},
methods: {
    getData(){
        if(!this.getmax) return;
        wx.showLoading({
          title: 'Loading...', //提示的内容,
          mask: true, //显示透明蒙层，防止触摸穿透,
        });
    request.get("goods/search",{query:this.keyword,pagenum:this.pagenum,pagesize:this.pagesize}).then(res=>{
        let {goods}=res.data.message;
        this.goodsList=this.goodsList.concat(goods)
        this.pagenum++;
        if(goods.length<this.pagesize){
            this.getmax=false;
        }
        wx.hideLoading();
    })
    },
    //跳转页面的函数
    getsearch(keyword){
        wx.navigateTo({ url: '/pages/search/main?keyword='+keyword });
    },
    getdetails(id){
        wx.navigateTo({ url: '/pages/details/main?goods_id='+id });
    }
},
onLoad(query){
        this.keyword=query.keyword;
        this.getData();
},
onReachBottom(){
    this.getData();
},
onPullDownRefresh(){
    this.pagenum=1;
    this.getmax=true;
    this.goodsList=[];
    this.getData()
},
onUnload(){
     this.pagenum=1;
    this.getmax=true;
    this.goodsList=[];
}
}
</script>

<style lang="scss">
.search-wrapper{
    background: #eee;
    padding:20rpx;
    .search-input{
        background:#fff;
        height:60rpx;
        font-size:15px;
        color:#999;
        display: flex;
        align-items: center;
        padding: 0 20rpx;
    }
    .search-input icon{
        margin-right:5px;
    }
}
.tab{
    display: flex;
    border-bottom:1px #eee solid;
    .tab-item{
        flex:1;
        text-align: center;
        line-height: 100rpx;
    }
    .active{
        color:red;
    }
}
.goods-list{
    padding-left:20rpx;
    .goods-item{
        padding:20rpx 20rpx 20rpx 0;
        display: flex;
        border-bottom:1px #eee solid;
        image{
            display: block;
            width:200rpx;
            height:200rpx;
            flex-shrink: 0;
            margin-right: 20rpx;
        }
        .goods-title{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .goods-right{
            flex:1;
            display: flex;
            flex-direction:column;
            justify-content: space-between;
        }
        .price{
            color:red;
            font-size: 14px;
            span{
                font-size: 22px;
            }
        }
    }
}
.loading{
    line-height: 80rpx;
    text-align: center;
    font-size:14px;
    color:#999;
}
</style>
