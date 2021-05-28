<template>
    <div id="app">
            <router-view v-if="$route.meta.keepAlive"></router-view>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <little-cart></little-cart>
    </div>
</template>

<script>
  import littleCart from './components/littleCart.vue'
  export default {
    name: 'app',
    components: {
      'little-cart': littleCart,
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "./style/common.scss";
    #app {
      margin: 0 auto;
      width: 1200px;
    }
</style>
