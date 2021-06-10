<template>
  <div id="address-info">
    <form>
      <h3>联系人</h3>
      <div class="name">
        <label for="name">姓名:</label>
        <div class="input-container">
          <input type="text" v-model="formData.name" id="name" placeholder="请填写收货人的姓名">
        </div>
      </div>
      <div class="gender">
        <div @click="selectGender('male')">
          <i class="iconfont" v-if="formData.gender === 'male'"><svg t="1622446573940" class="icon" viewBox="0 50 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2368" width="30" height="30"><path d="M913 514.3c0-220.8-179.6-400.4-400.4-400.4-19.1 0-37.8 1.3-56.2 3.9-159.8 60.8-273.3 215.3-273.3 396.4 0 181.1 113.6 335.7 273.4 396.5 18.5 2.6 37.2 3.9 56.1 3.9C733.4 914.6 913 735 913 514.3z" fill="#91B4FF" p-id="2369"></path><path d="M446.1 673.2c-6 0-12.1-2.3-16.7-6.9-9.2-9.2-9.2-24.2 0-33.4L700 362.3c9.2-9.2 24.2-9.2 33.4 0s9.2 24.2 0 33.4L462.8 666.3c-4.6 4.6-10.6 6.9-16.7 6.9z" fill="#3778FF" p-id="2370"></path><path d="M444.5 671.5c-6 0-12.1-2.3-16.7-6.9l-136-136c-9.2-9.2-9.2-24.2 0-33.4s24.2-9.2 33.4 0l136 136c9.2 9.2 9.2 24.2 0 33.4-4.6 4.6-10.7 6.9-16.7 6.9z" fill="#3778FF" p-id="2371"></path><path d="M185 807.9c-6.8 0-13.5-2.9-18.2-8.6-13.6-16.5-26.1-34-37.2-52.2-6.8-11.1-3.3-25.7 7.9-32.5 11.1-6.8 25.7-3.3 32.5 7.9 9.9 16.2 21.1 31.9 33.3 46.7 8.3 10.1 6.9 24.9-3.2 33.2-4.5 3.7-9.8 5.5-15.1 5.5z" fill="#3778FF" p-id="2372"></path><path d="M511.9 961.9c-93 0-182.2-28.3-258-81.8-10.7-7.5-13.2-22.3-5.7-32.9 7.6-10.7 22.3-13.2 32.9-5.7 67.7 47.8 147.5 73.1 230.7 73.1 220.8 0 400.4-179.6 400.4-400.4S732.7 113.9 511.9 113.9 111.6 293.5 111.6 514.3c0 38.3 5.4 76.2 16 112.6 3.7 12.5-3.5 25.6-16 29.3-12.6 3.6-25.6-3.5-29.3-16-11.9-40.7-17.9-83-17.9-125.8C64.4 267.6 265.2 66.8 512 66.8s447.6 200.8 447.6 447.6-200.9 447.5-447.7 447.5z" fill="#3778FF" p-id="2373"></path></svg></i>
          <i class="circle" v-else></i>
          <span>先生</span>
        </div>
        <div @click="selectGender('female')">
          <i class="iconfont" v-if="formData.gender==='female'"><svg t="1622446573940" class="icon" viewBox="0 50 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2368" width="30" height="30"><path d="M913 514.3c0-220.8-179.6-400.4-400.4-400.4-19.1 0-37.8 1.3-56.2 3.9-159.8 60.8-273.3 215.3-273.3 396.4 0 181.1 113.6 335.7 273.4 396.5 18.5 2.6 37.2 3.9 56.1 3.9C733.4 914.6 913 735 913 514.3z" fill="#91B4FF" p-id="2369"></path><path d="M446.1 673.2c-6 0-12.1-2.3-16.7-6.9-9.2-9.2-9.2-24.2 0-33.4L700 362.3c9.2-9.2 24.2-9.2 33.4 0s9.2 24.2 0 33.4L462.8 666.3c-4.6 4.6-10.6 6.9-16.7 6.9z" fill="#3778FF" p-id="2370"></path><path d="M444.5 671.5c-6 0-12.1-2.3-16.7-6.9l-136-136c-9.2-9.2-9.2-24.2 0-33.4s24.2-9.2 33.4 0l136 136c9.2 9.2 9.2 24.2 0 33.4-4.6 4.6-10.7 6.9-16.7 6.9z" fill="#3778FF" p-id="2371"></path><path d="M185 807.9c-6.8 0-13.5-2.9-18.2-8.6-13.6-16.5-26.1-34-37.2-52.2-6.8-11.1-3.3-25.7 7.9-32.5 11.1-6.8 25.7-3.3 32.5 7.9 9.9 16.2 21.1 31.9 33.3 46.7 8.3 10.1 6.9 24.9-3.2 33.2-4.5 3.7-9.8 5.5-15.1 5.5z" fill="#3778FF" p-id="2372"></path><path d="M511.9 961.9c-93 0-182.2-28.3-258-81.8-10.7-7.5-13.2-22.3-5.7-32.9 7.6-10.7 22.3-13.2 32.9-5.7 67.7 47.8 147.5 73.1 230.7 73.1 220.8 0 400.4-179.6 400.4-400.4S732.7 113.9 511.9 113.9 111.6 293.5 111.6 514.3c0 38.3 5.4 76.2 16 112.6 3.7 12.5-3.5 25.6-16 29.3-12.6 3.6-25.6-3.5-29.3-16-11.9-40.7-17.9-83-17.9-125.8C64.4 267.6 265.2 66.8 512 66.8s447.6 200.8 447.6 447.6-200.9 447.5-447.7 447.5z" fill="#3778FF" p-id="2373"></path></svg></i>
          <i class="circle" v-else></i>
          <span>女士</span>
        </div>
      </div>
      <div class="phone">
        <label for="phone">电话:</label>
        <div class="input-container">
          <input type="text" v-model="formData.phone" id="phone" placeholder="请填写收货手机号码">
        </div>
      </div>
      <h3>收货地址</h3>
      <div class="location">
        <label>小区/大厦/学校:</label>
        <router-link :to="{path:'/add_address/location'}" class="to-locate input-container select-address-container">
          <i class="iconfont">&#xe605;</i>
          <span v-if="formData.title!=''">{{formData.title}}</span>
          <span v-else>点击选择</span>
          <i class="iconfont icon-right">&#xe63f;</i>
        </router-link>

      </div>
      <div class="house-number">
        <label for="house-number">楼号-门牌号:</label>
        <div class="input-container">
          <input type="text" v-model="formData.house_number" id="house-number" placeholder="例:16号楼427室">
        </div>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    props: ['formData'],
    methods: {
      selectGender(sex) {
        this.formData.gender = sex;
      }
    },
    watch: {
      formData(val) {
        this.$emit('update:formData', val);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/mixin";

  #address-info {
    form {
      h3 {
        font-size: 0.3rem;
        font-weight: 600;
        margin: 0.4rem 0.2rem;
      }
      .name, .phone, .location, .house-number {
        background: #fff;
        border-bottom: 1px solid $mtGrey;
      }
      label {
        @include px2rem(line-height, 85);
        float: left;
        font-size: 0.4rem;
        font-weight: 600;
        margin-left: 0.2rem;
      }
      .input-container {
        display: block;
        margin-left: 3rem;
      }
      input {
        width: 100%;
        @include px2rem(height, 85);
        border: none;
        font-size: 0.45rem;
        text-indent: 10px;
        outline: none;
        &::-webkit-input-placeholder {
          font-size: 0.4rem;
          color: #9d9d9d;
        }
      }
      /*定位*/
      .location {
        font-size: 0.4rem;
        .select-address-container {
          @include px2rem(line-height, 85);
          .icon-right {
            float: right;
            margin-right: 10px;
          }
        }
        .to-locate {
          flex: 1;
          color: #9d9d9d;
        }
      }
      /*选择性别*/
      .gender {
        text-align: center;
        padding: 0.1rem 0;
        background: #fff;
        border-bottom: 1px solid $mtGrey;
        div {
          display: inline-block;
          margin: 0.5rem 0.5rem;
          .iconfont, .circle {
            @include px2rem(width, 36);
            @include px2rem(height, 36);
            display: inline-block;
            color: #fff;
            border-radius: 50%;
            vertical-align: middle;
          }
          span {
            font-size: 0.4rem;
            font-weight: 600;
            margin: 0 0.1rem;
          }
          .iconfont {
            @include px2rem(line-height, 36);
            text-align: center;
          }
          .circle {
            border: 1px solid $mtGrey;
          }
        }
      }
    }
  }
</style>
