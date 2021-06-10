<!--我的收获地址-->
<template>
  <div id="address">
    <v-head title="我的收货地址" goBack=true></v-head>
    <nav>
      <span>我的收货地址</span>
      <span v-show="!status" @click="managerAddress()">管理</span>
      <span v-show="status" @click="finish()">完成</span>
    </nav>
    <div class="container">
      <ul>
        <li v-for="(item,index) in addressLists" :key="item.id">
          <div>
            <p>{{item.address}} {{item.house_number}}</p>
            <span class="name">{{item.name}}</span>
            <span class="sex">{{item.gender === 'female' ? '女士' : '先生'}}</span>
            <span class="phone">{{item.phone}}</span>
          </div>
          <i class="iconfont delete" v-show="status" @click="deleteAddress(item.id,index)"><svg t="1622614139723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3103" width="40" height="40"><path d="M684.580525 728.322834m-295.677166 0a295.677166 295.677166 0 1 0 591.354333 0 295.677166 295.677166 0 1 0-591.354333 0Z" fill="#5CF1E7" p-id="3104"></path><path d="M387.196708 483.418514a42.666258 42.666258 0 0 0-42.666257 42.666258v185.598221a42.666258 42.666258 0 1 0 85.332515 0v-185.598221a42.666258 42.666258 0 0 0-42.666258-42.666258zM557.86174 483.418514a42.666258 42.666258 0 0 0-42.666258 42.666258v185.598221a42.666258 42.666258 0 0 0 85.332515 0v-185.598221a42.666258 42.666258 0 0 0-42.666257-42.666258z" fill="#A8B9E9" p-id="3105"></path><path d="M705.060329 362.673004v541.434812a13.22654 13.22654 0 0 1-13.22654 13.22654H248.958033a13.22654 13.22654 0 0 1-13.22654-13.22654V362.673004h469.328836m85.332516-85.332515h-639.993867v626.767327a98.985718 98.985718 0 0 0 98.559055 98.559055h442.875756a98.985718 98.985718 0 0 0 98.559056-98.559055V277.340489z" fill="#1F56F5" p-id="3106"></path><path d="M854.392231 277.340489H86.399591a42.666258 42.666258 0 0 0 0 85.332515h767.99264a42.666258 42.666258 0 0 0 0-85.332515zM675.193949 256.00736a42.666258 42.666258 0 0 1-42.666258-34.133006l-21.759792-108.372295A34.986331 34.986331 0 0 0 577.061556 85.342329h-213.331289a34.986331 34.986331 0 0 0-34.559669 28.15973L307.410806 221.874354a42.666258 42.666258 0 0 1-85.332515-17.066503l21.759791-107.945633A120.74551 120.74551 0 0 1 363.730267 0.009813h213.331289a120.74551 120.74551 0 0 1 118.185534 96.852405l21.759791 107.945633A42.666258 42.666258 0 0 1 683.7272 256.00736z" fill="#1F56F5" p-id="3107"></path></svg></i>
        </li>
      </ul>
    </div>
    <router-link tag="div" class="add" :to="{path:'/add_address'}">
      <i><svg t="1622446972171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3211" width="40" height="40"><path d="M510.54 64c-247.42 0-448 200.58-448 448s200.58 448 448 448 448-200.58 448-448-200.58-448-448-448zM777.2 565.33H563.87v213.33c0 29.33-24 53.33-53.33 53.33s-53.33-24-53.33-53.33V565.33H243.87c-29.33 0-53.33-24-53.33-53.33s24-53.33 53.33-53.33H457.2V245.33c0-29.33 24-53.33 53.33-53.33s53.33 24 53.33 53.33v213.33H777.2c29.33 0 53.33 24 53.33 53.33 0.01 29.34-23.99 53.34-53.33 53.34z" fill="#298DF7" p-id="3212"></path></svg></i>
      <span>新增收获地址</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getAllAddress, deleteAddress} from '@/api/user'

  export default {
    data() {
      return {
        addressLists: [],
        selectAddressId: '',
        status: 0
      }
    },
    methods: {
      managerAddress() {
        this.status = 1;
      },
      finish() {
        this.status = 0;
      },
      deleteAddress(id, index) {
        deleteAddress({address_id: id}).then((response) => {
          if (response.data.status === 200) {
            this.addressLists.splice(index, 1); //通过splice 删除数据
          }
        })
      }
    },
    created() {
      getAllAddress().then((response) => {
        this.addressLists = response.data.address;
        this.selectAddressId = this.addressLists[0].id;
      })
    },
    activated(){
      // this.$forceUpdate();
      getAllAddress().then((response) => {
        this.addressLists = response.data.address;
        this.selectAddressId = this.addressLists[0].id;
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../style/mixin";

  $grey: #999;
  #address {
    width: 1200px;
    margin:0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 202;
    background: white;
    nav {
      display: flex;
      padding: 0.3rem 0;
      background: #fff;
      span {
        font-size: 0.4rem;
        margin-right: 0.2rem;
        font-weight: 500;
      }
      span:first-child {
        flex: 1;
        font-weight: normal;
        color: $grey;
        margin-left: 0.2rem;
      }

    }
    .container {
      margin-top: 0.2rem;
      ul {
        li {
          display: flex;
          align-items: center;
          position: relative;
          padding: 0.2rem;
          background: #fff;
          div {
            flex: 1;
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
          }
          .edit, .delete {
            font-size: 0.6rem;
            color: $mtYellow;
          }
          .edit {
            margin: 0 0.3rem;
          }
        }
      }
    }
    .add {
      width: 1200px;
      position: fixed;
      bottom: 0;
      text-align: center;
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
