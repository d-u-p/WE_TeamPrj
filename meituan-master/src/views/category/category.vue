<template>
  <div class="wrapper" ref="scrollWrapper">
    <div id="food-type">
      <v-head :title="type" goBack="true"></v-head>
      <div class="nav"></div>
      <div class="shop">
        <nearby-shops :flag="flag" :ready=true :scrollWrapper="scrollWrapper"></nearby-shops>
      </div>
    </div>
  </div>
</template>

<script>
  import nearbyShops from '@/views/Index/nearby_shops'
  import vNav from '../Index/nav.vue'
  export default {
    data() {
      return {
        scrollWrapper: null,
        type: '',
        flag: 0
      }
    },
    mounted() {
      this.flag = this.$route.query.flag || 0;
      this.type = this.$route.query.type || '美食';
      this.scrollWrapper = this.$refs.scrollWrapper;  //保存DOM元素 用于传递给子组件nearbyShops初始化better-scroll
      this.$store.dispatch('locationReady', true);
    },
    components: {
      'nearby-shops': nearbyShops,
      'v-nav': vNav,
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrapper {
    height: 100%;
    overflow: hidden;
    .shop {
      margin-left:200px;
      align-self:center;
      float:left;
      width:1000px;
      height:2000px;
    }
  }
</style>
