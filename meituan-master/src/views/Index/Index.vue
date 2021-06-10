<!--主页-->
<template>
  <div class="index" ref="scrollWrapper">
    <div class="main-container">
      <v-head title="西电外卖"></v-head>
      <div class="guide-container">
        <router-link to="/location?fromIndex=true" class="location">
          <i class="iconfont">&#xe604;</i>
          <span class="address">{{address.address}}</span>
          <i class="iconfont">&#xe6d7;</i>
        </router-link>
        <router-link to="/search" class="search">
          <i class="iconfont">&#xe626;</i>
          <span>请输入商家 商品名</span>
        </router-link>
      </div>
      <!--导航轮播部分-->
      <v-nav class="nav"></v-nav>
      <div class="shop">
        <!--附近商家-->
        <div class="head">
          <span class="line"></span>
          <h2>附近商家</h2>
          <span class="line"></span>
        </div>
        <nearby-shops :scrollWrapper="scrollWrapper"></nearby-shops>
      </div>
    </div>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
  import nearbyShops from './nearby_shops.vue'
  import vNav from './nav.vue'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        scrollWrapper: null,    //存放 scrollWrapper这个DOM元素 用于等附近商家列表加载后 初始化better-scroll
      }
    },
    computed: {
      ...mapGetters(['address', 'locationReady'])
    },
    created() {
      let {lat, lng} = this.address;
      if (!lat || !lng) {      //如果没有定位 进行定位
        this.getLocation();   //定位
      }
    },
    methods: {
      getLocation() { //获取当前定位
        this.$store.dispatch('location');
      }
    },
    mounted() {
      this.scrollWrapper = this.$refs.scrollWrapper;  //把DOM元素赋值 用于传递给子组件nearbyShops
    },
    components: {
      'nearby-shops': nearbyShops,
      'v-nav': vNav,
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/mixin.scss";
  .index {
    height: 100%;
    overflow: hidden;
    // color: rgb(0, 0, 0);
    // background-image: linear-gradient(to top, #330867 0%, #30cfd0 100%);
  }
  .main-container {
    // background-color:yellow;
    margin:0 auto;
    width:1200px;
    padding-bottom: 1rem;
    .guide-container {
      display: flex;
      align-self:center;
      .location, .search {
        display: flex;
        align-items: center;
        @include px2rem(height, 57);
      }
      .location {
        @include px2rem(width, 250);
        display: flex;
        margin: 0 0.2rem;
        border-radius: 0.4rem;
        background: rgb(166, 166, 166);
        .iconfont {
          color: #fff;
          font-size: 0.35rem;
        }
        i:first-child {
          padding-left: 8px;
        }
        .address {
          flex: 1;
          font-size: 0.3rem;
          color: #fff;
          @include px2rem(width, 180);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        i:last-child {
          padding-right: 8px;
        }
      }
      .search {
        width:500px;
        background: rgb(237, 237, 237);
        margin-right: 0.2rem;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        align-items: center;
        .iconfont {
          display: inline-block;
          padding-left: 10px;
          padding-top: 2px;
          font-size: 0.4rem;
        }
        span {
          font-size: 0.35rem;
          display: inline-block;
          padding-left: 10px;
        }
      }
    }
    .nav {
      // background-color:green;
      width:200px;
      float:left;
    }
    .shop {
      // background-color:blue;
      align-self:center;
      float:left;
      width:1000px;
      height:2000px;
      /*标题*/
      .head {
        text-align: center;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid $bottomLine;
        .line {
          vertical-align: middle;
          display: inline-block;
          @include px2rem(width, 70);
          height: 0;
          border-bottom: 1px solid #000;
        }
        h2 {
          font-size: 0.5rem;
          display: inline-block;
          margin: 0.2rem;
        }
      }
    }
  }
</style>
