<template>
  <div id="selector">
    <div class="ball-container" @click="reduceCart" v-if="food_num">
      <span class="reduce"><i class="iconfont icon-reduce">&#xe613;</i></span>
    </div>
    <span class="number" v-if="food_num">{{food_num}}</span>
    <div class="ball-container" @click="addCart($event)">
      <span class="add"><i class="iconfont icon-add"><svg t="1622446972171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3211" width="40" height="40"><path d="M510.54 64c-247.42 0-448 200.58-448 448s200.58 448 448 448 448-200.58 448-448-200.58-448-448-448zM777.2 565.33H563.87v213.33c0 29.33-24 53.33-53.33 53.33s-53.33-24-53.33-53.33V565.33H243.87c-29.33 0-53.33-24-53.33-53.33s24-53.33 53.33-53.33H457.2V245.33c0-29.33 24-53.33 53.33-53.33s53.33 24 53.33 53.33v213.33H777.2c29.33 0 53.33 24 53.33 53.33 0.01 29.34-23.99 53.34-53.33 53.34z" fill="#298DF7" p-id="3212"></path></svg></i></span>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
//    接收父组件传递进来的货物  和 商店 id 和图片url
    props: ['food_id', 'name', 'price', 'pic'],
    methods: {
      addCart(event) {
        let elRight = event.target.getBoundingClientRect().right; //选择器的右边 离左边页面的位置
        let elBottom = event.target.getBoundingClientRect().bottom;   //选择器的底部  离顶部页面的位置
        let {pic_url} = this.poi_info;   //商店名字 图片
        let restaurant_name = this.poi_info.name;
        this.$store.dispatch('addCart', {
          restaurant_name,
          pic_url,
          name: this.name,
          price: this.price,
          foods_pic: this.pic,
          food_id: this.food_id,
          restaurant_id: this.poi_info.id,
        });
        this.$emit('showDot', elRight, elBottom);
      },
      reduceCart() {
        this.$store.dispatch('reduceCart', {restaurant_id: this.poi_info.id, food_id: this.food_id})
      }
    },
    computed: {
      ...mapGetters([
        'cartList', 'poi_info'
      ]),
      food_num() {
        let restaurant = this.cartList[this.poi_info.id];
        return restaurant ? restaurant[this.food_id] ? restaurant[this.food_id]['num'] : 0 : 0;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/mixin.scss";

  #selector {
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .reduce, .add {
      display: flex;
      border-radius: 50%;
    }
    .reduce {
      border: 1px solid $mtGrey;
      margin: 0 0.1rem;
    }
    .number {
      display: inline-block;
      margin: 0 0.15rem;
      font-size: 0.3rem;
    }
    .ball-container {
      padding: 0.1rem;
    }
    .add {
      margin: 0 0.1rem;
    }
    .icon-reduce, .icon-add {
      display: flex;
      font-size:0.4rem;
      @include px2rem(width, 50);
      @include px2rem(height, 50);
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .icon-reduce {
      color: $mtGrey;
    }
  }
</style>
