<!--商店底部购物栏-->
<template>
  <div id="bottom">
    <!--购物车详细列表-->
    <transition name="fade">
      <article class="cart-list-container" v-show="cartDetail">
        <section class="head">
          <span>餐盒费0元</span>
          <span><i class="iconfont">&#xe615;</i><span @click="emptyCart()">清空购物车</span></span>
        </section>
        <section class="cart-list" v-for="item in  restaurantCartList" :key="item.id">
          <span>{{item.name}} </span>
          <span class="price">￥{{ Number((item.price * item.num).toFixed(2))}}</span>
          <selector :name="item.name" :food_id="item.id" :price="item.price" style="bottom:0.3rem;"></selector>
        </section>
      </article>
    </transition>
    <!--底部bar-->
    <div class="bottom-bar">
      <div class="left" @click="showCartDetail();">
        <span class="shopping-cart" :class="{cartActive:totalPrice>0,ballInCart:ballInCart}" ref="iconCartContainer">
          <i class="iconfont icon-cart"><svg t="1622173488724" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29296" width="80" height="80"><path d="M455.168 644.096h179.2V609.28H474.624zM542.208 713.728c0 25.6 20.48 46.592 46.08 46.592s46.592-20.992 46.592-46.592c0-4.096-0.512-7.68-1.536-11.776h-89.6c-1.024 3.584-1.536 7.68-1.536 11.776zM355.84 667.136c-25.6 0-46.08 20.992-46.08 46.592s20.48 46.592 46.08 46.592 46.592-20.992 46.592-46.592-20.48-46.592-46.592-46.592zM428.032 597.504H366.08c-3.072 0-5.632-2.56-5.632-5.632 0-1.024 0-2.048 0.512-2.56l20.992-37.888h46.08l-71.68-151.04h-46.592v-46.592h75.776l22.016 46.592h257.536l12.8-23.552c2.048-3.072 3.072-7.168 3.072-11.264 0-12.8-10.24-23.04-23.04-23.04h-343.04l-22.016-46.592H216.576v46.592h46.592l83.456 176.128-31.232 56.832c-3.584 6.656-5.632 14.336-5.632 22.528 0 25.6 20.992 46.592 46.592 46.592H404.48c1.024-3.584 2.56-7.168 4.096-10.752l19.456-36.352z" fill="#AAD4FF" p-id="29297"></path><path d="M680.96 725.504c-25.6 0-46.08 20.992-46.08 46.592s20.48 46.592 46.08 46.592 46.592-20.992 46.592-46.592c0-26.112-20.992-46.592-46.592-46.592zM449.024 725.504c-25.6 0-46.08 20.992-46.08 46.592s20.48 46.592 46.08 46.592 46.592-20.992 46.592-46.592c-0.512-26.112-20.992-46.592-46.592-46.592zM455.168 644.096l18.944-34.816h173.056c17.408 0 32.768-9.728 40.448-24.064l82.944-150.528c2.048-3.072 3.072-7.168 3.072-11.264 0-12.8-10.24-23.04-23.04-23.04h-343.04l-22.016-46.592H309.76v46.592h46.592l71.68 151.04 11.776 25.088-11.776 20.992-19.456 35.84c-2.048 3.584-3.072 7.168-4.096 10.752-1.024 3.584-1.536 7.68-1.536 11.776 0 25.6 20.992 46.592 46.592 46.592h279.04v-46.592H458.752c-3.072 0-5.632-2.56-5.632-5.632 0-1.024 0-2.048 0.512-2.56l1.536-3.584z" fill="#2B95FF" p-id="29298"></path><path d="M223.232 696.32h-29.696v-29.696c0-6.656-5.12-11.776-11.776-11.776s-11.776 5.12-11.776 11.776v29.696h-29.696c-6.656 0-11.776 5.12-11.776 11.776 0 6.656 5.12 11.776 11.776 11.776h29.696v29.696c0 6.656 5.12 11.776 11.776 11.776s11.776-5.12 11.776-11.776v-29.696h29.696c6.656 0 11.776-5.12 11.776-11.776-0.512-6.656-5.632-11.776-11.776-11.776z" fill="#A8D4FF" p-id="29299"></path><path d="M172.032 437.248h65.536v65.536H172.032z" fill="#D9EDFF" p-id="29300"></path><path d="M861.696 655.36m-32.768 0a32.768 32.768 0 1 0 65.536 0 32.768 32.768 0 1 0-65.536 0Z" fill="#D9EDFF" p-id="29301"></path><path d="M825.856 298.496l-89.088-89.088c-3.072-3.072-8.192-4.096-12.8-2.56-4.096 2.048-7.168 6.144-7.168 10.752v89.088c0 3.072 1.536 6.144 3.584 8.192 2.048 2.048 5.12 3.584 8.192 3.584h89.088c4.608 0 8.704-3.072 10.752-7.168 1.536-4.608 0.512-9.728-2.56-12.8z m-86.016-3.584V245.76l49.152 49.152h-49.152z" fill="#A8D4FF" p-id="29302"></path></svg></i>
          <span class="food-num" v-if="foodNum">{{foodNum}}</span>
      </span>
        <div class="price-container">
          <span class="total-price" v-if="totalPrice">￥{{totalPrice}}</span>
          <span class="deliver-fee" v-if="!shipping_fee">免配送费</span>
          <span class="deliver-fee" v-else>另需要配送费￥{{shipping_fee}}</span>
        </div>
      </div>
      <span class="submit" v-if="!totalPrice">{{min_price_tip}}</span>
      <span class="submit" v-else-if="totalPrice < min_price">还差{{min_price - totalPrice}}</span>
      <span @click="prepareOrder()" class="submit go-buy" v-else>去结算</span>
    </div>
    <transition name="fade">
      <div class="shade" v-show="cartDetail" @click="cartDetail=false;"></div>
    </transition>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {getInfo} from '@/utils/auth'
  import selector from '@/components/selector'

  export default {
    data() {
      return {
        cartDetail: false,
        restaurant_id: 0,
        shipping_fee: 0,
        shipping_fee_tip: 0,
        min_price: 0,
        min_price_tip: '￥0起送',
      }
    },
    computed: {
      ...mapGetters([
        'poi_info', 'cartList', 'ballInCart'
      ]),
      totalPrice() {  //计算购物车总价格
        return this.cartList[this.restaurant_id] ? this.cartList[this.restaurant_id].totalPrice : 0;
      },
      foodNum() {    //商品数量
        return this.cartList[this.restaurant_id] ? this.cartList[this.restaurant_id].totalNum : 0;
      },
      food_spu_tags() {
        return this.restaurant_info.food_spu_tags;
      },
      restaurantCartList() { //当前商店购物车商品
        let lists = this.cartList[this.restaurant_id];
        let p;
        let arr = [];
        for (p in lists) {
          if (Number(p))
            arr.push(lists[p]);
        }
        return arr;
      }
    },
    methods: {
      showCartDetail() {   //点击底部显示购物车详情
        if (this.cartDetail)    //如果当前是显示状态 再次点击为隐藏
          this.cartDetail = false;
        else      //如果当前是关闭状态   判断购物车有没有商品 如果有才能显示详情
          this.cartDetail = this.totalPrice > 0;
      },
      prepareOrder() {    //准备下订单
        let data = {
          restaurant_id: this.restaurant_id,
          foods: this.cartList[this.restaurant_id]
        };

        if(getInfo){
          localStorage.setItem('confirmOrderData', JSON.stringify(data));
          this.$router.push({path: '/confirm_order'})
        }else{
          this.$router.push({path:'/login'})
        }

      },
      emptyCart() {
        this.$store.dispatch('emptyCart', {restaurant_id: this.restaurant_id});
        this.cartDetail = false;
      }
    },
    created() {
      this.restaurant_id = this.$route.query.id;
    },
    mounted() {
      let _this = this
      this.$refs['iconCartContainer'].addEventListener('webkitAnimationEnd', () => {
        _this.$store.dispatch('ballInCart', false);       //触发底部小车晃动
      })
    },
    watch: {
      totalPrice(val) { //watch totalPrice 如果为0 就隐藏购物车底部点击后显示出来的商品
        if (val === 0)
          this.cartDetail = false;
      },
      poi_info(val) {  //监听vuex的reataurant_info信息
        this.shipping_fee = val.shipping_fee;   //配送信息
        this.min_price = val.min_price          //最低价起送信息
        this.min_price_tip = val.min_price_tip
        this.shipping_fee_tip = val.shipping_fee_tip;
      }
    },
    components: {
      selector
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../style/mixin";

  #bottom {
    width: 100%;
    z-index: 1000;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .cart-list-container {
      position: fixed;
      left: 0;
      right: 0;
      @include px2rem(bottom, 90);
      z-index: 102;
      background: grey;
      section {
        padding: 0 0.1rem;
      }
      .head {
        display: flex;
        @include px2rem(height, 90);
        justify-content: space-between;
        align-items: center;
        background: #f4f4f4;
        span {
          font-size: 0.4rem;
        }
      }
      .cart-list {
        display: flex;
        align-items: center;
        position: relative;
        @include px2rem(height, 120);
        background: #fff;
        span {
          font-size: 0.4rem;
        }
        .price {
          margin: 0 0.5rem;
        }
        span:first-child {
          @include ellipsis;
          width: 50%;
        }
      }
    }
    .bottom-bar {
      display: flex;
      @include px2rem(height, 90);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 103;
      background: rgb(51, 51, 51);
      .left {
        flex: 1;
      }
      .shopping-cart, .submit {
        color: rgb(165, 165, 165);
        @include px2rem(line-height, 90);
      }
      .shopping-cart {
        position: absolute;
        display: inline-block;
        @include px2rem(width, 110);
        @include px2rem(height, 110);
        @include px2rem(left, 26);
        @include px2rem(top, -30);
        border-radius: 50%;
        background: rgb(102, 102, 102);
        text-align: center;
        .icon-cart {
          font-size: 0.9rem;
          @include px2rem(line-height, 110);
          font-weight: bold;
        }
        &.cartActive {
          background: white;
          border:1px grey;
          .icon-cart {
            // color: #000;
          }
        }
        &.ballInCart {
          animation: move .5s ease-in-out;
        }
        .food-num {
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          font-size: 0.2rem;
          @include px2rem(width, 34);
          @include px2rem(line-height, 34);
          border-radius: 50%;
          background: blue;
          text-align: center;
        }

      }
      .price-container {
        @include px2rem(width, 400);
        height: 100%;
        padding-left: 2rem;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        .total-price {
          display: inline-block;
          font-size: 0.6rem;
          color: #fff;
        }
        .deliver-fee {
          font-size: 0.35rem;
          color: #999999;
        }
      }
      .submit {
        @include px2rem(width, 200);
        height: 100%;
        font-weight: 500;
        font-size: 0.4rem;
        background: #2c2c2c;
        text-align: center;
        &.go-buy {
          color: #000;
          background: skyblue;
        }
      }
    }
    .shade {
      position: fixed;
      @include px2rem(top, 90);
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(51, 51, 51, 0.4);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  @keyframes move {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(1.1)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(1.1)
    }
    100% {
      transform: scale(1)
    }
  }
</style>
