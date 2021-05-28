<template>
  <div class="wrapper" ref="scrollWrapper">
    <div id="food-type">
      <v-head :title="type" goBack="true" bgColor="#f4f4f4"></v-head>
      <v-nav class="nav"></v-nav>
      <nearby-shops :ready=true :scrollWrapper="scrollWrapper"></nearby-shops>
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
        type: ''
      }
    },
    mounted() {
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
    .nav {
      // background-color:green;
      width:200px;
      float:left;
    }
    nearby-shops {
      align-self:center;
      float:left;
      width:1000px;
      height:2000px;
    }
  }
</style>
