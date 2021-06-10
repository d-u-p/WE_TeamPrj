<!--订单收货地址-->
<template>
  <div id="address">
    <v-head title="收货地址" goBack="true" style="width:1200px;margin:0 auto"></v-head>
    <div class="container">
      <ul>
        <li v-for="item in addressLists" :key="item.id" @click="selectAddress(item)">
          <p>{{item.address}} {{item.house_number}}</p>
          <span class="name">{{item.name}}</span>
          <span class="sex">{{item.gender === 'female' ? '女士' : '先生'}}</span>
          <span class="phone">{{item.phone}}</span>
          <i class="iconfont icon-select" v-if="item.id === selectAddressId">&#xe6da;</i>
        </li>
      </ul>
    </div>
    <router-link tag="div" class="add" :to="{path:'/add_address'}">
      <i class="iconfont icon"><svg t="1622446972171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3211" width="40" height="40"><path d="M510.54 64c-247.42 0-448 200.58-448 448s200.58 448 448 448 448-200.58 448-448-200.58-448-448-448zM777.2 565.33H563.87v213.33c0 29.33-24 53.33-53.33 53.33s-53.33-24-53.33-53.33V565.33H243.87c-29.33 0-53.33-24-53.33-53.33s24-53.33 53.33-53.33H457.2V245.33c0-29.33 24-53.33 53.33-53.33s53.33 24 53.33 53.33v213.33H777.2c29.33 0 53.33 24 53.33 53.33 0.01 29.34-23.99 53.34-53.33 53.34z" fill="#298DF7" p-id="3212"></path></svg></i>
      <span>新增收获地址</span>
    </router-link>
    <div class="empty-address" v-show="emptyAddress">
      <span>一个地址都没有哦</span>
    </div>
  </div>
</template>

<script>
  import {getAllAddress} from '@/api/user'

  export default {
    data() {
      return {
        addressLists: [],
        selectAddressId: '',
        emptyAddress: false
      }
    },
    methods: {
      selectAddress(item) {
        this.select_address_id = item.id;
        this.$store.dispatch('recodeDeliveryAddress', item); //地址信息由vuex管理
        this.$router.go(-1);                //返回上一个路由
      },
    },
    created() {
      getAllAddress().then((response) => {    //获取用户地址
        let data = response.data;
        if (data.status === 200) {
          if (!data.address.length) {
            this.emptyAddress = true;
          } else {
            this.emptyAddress = false;
            this.addressLists = response.data.address;
            this.selectAddressId = this.addressLists[0].id;
          }
        }
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../style/mixin";

  #address {
    width:100%;
    margin:0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 202;
    background: white;
    .container {
      width:1200px;
      margin: 0 auto;
      ul {
        li {
          position: relative;
          padding: 0.2rem;
          background: #fff;
          p {
            font-size: 0.4rem;
            font-weight: 600;
            margin: 0.1rem 0;
          }
          span {
            color: #848484;
            font-size: 0.3rem;
            &:nth-of-type(2) {
              margin: 0 0.2rem 0 0.1rem;
            }
          }
          .icon-select {
            font-size: 0.7rem;
            position: absolute;
            top: 50%;
            right: 0.1rem;
            transform: translateY(-50%);
            color: blue;
          }
        }
      }
    }
    .empty-address {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
      span {
        font-size: 0.4rem;
      }
    }

    .add {
      width: 100%;
      position: fixed;
      bottom: 0;
      text-align: center;
      background: #fff;
      @include px2rem(line-height, 100);
      border-top: 1px solid $mtGrey;
      border-bottom: 1px solid $mtGrey;
      .icon {
        font-size: 0.6rem;
        margin: 0 0.1rem;
        margin-bottom:-10px;
      }
      span {
        font-size: 0.5rem;
        font-weight: 400;
      }
    }
  }
</style>
