<!--对订单进行评论页面-->
<template>
  <div id="comment">
    <v-head title="评论" goBack="true" bgColor="#f4f4f4"></v-head>
    <!--
    <div class="deliver-comment">
      <div class="deliver-info">
        <div class="avatar">
          <img src="http://5b0988e595225.cdn.sohucs.com/images/20190706/b4b3e0f0244849a59c2ef114308fae2c.jpeg">
        </div>
        <div class="info-container">
          <span class="deliver-type">美团快送</span>
          <div class="deliver-time">
            <span>今天19：10左右送达</span>
            <span class="time-error">时间不准 <i class="iconfont">&#xe6d7;</i></span>
          </div>
        </div>
      </div>
    </div>
    -->
    <div class="main-container">
      <div class="restaurant-info">
        <span class="avatar">
          <img :src="restaurant_info.pic_url">
        </span>
        <span class="restaurant-name">{{restaurant_info.name}}</span>
      </div>

      <div class="food-comment">
        <textarea
          class="comment-data"
          v-model="commentData"
          style="resize:none"
          placeholder="亲，菜品口味如何，对包装服务等还满意吗？"
          @input="input($event);"></textarea>
        <span class="tip">至少输入2个字</span>
      </div>

      <!--
      <div class="upload-picture-container">
        <div class="uplist-container" v-for="(item,index) in uploadList" :key="index">
          <div class="pic">
            <img :src="item">
          </div>
          <div class="delete" @click="deletePic(index)">
            <i class="iconfont icon-delete">&#xe60d;</i>
          </div>
        </div>
        <label class="upload">
          <i class="iconfont upload-icon">&#xe782;</i>
          <input id="file" type="file" ref="referenceUpload" @change="fileUpload($event)" style="display: none;">
        </label>
        <div class="upload-description" v-show="!uploadList.length">
          <h3>上传图片</h3>
          <p>内容丰富的评论有机会成为优质评价哦</p>
        </div>
      </div>
      -->
    </div>

    <div class="hidden-name-comment">
      <span class="selector no-select" v-if="!hiddenName" @click="hiddenName = !hiddenName;"></span>
      <span class="selector select" v-else>
        <i class="iconfont" @click="hiddenName = !hiddenName;"><svg t="1622639560798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="20" height="20"><path d="M913 514.3c0-220.8-179.6-400.4-400.4-400.4-19.1 0-37.8 1.3-56.2 3.9-159.8 60.8-273.3 215.3-273.3 396.4 0 181.1 113.6 335.7 273.4 396.5 18.5 2.6 37.2 3.9 56.1 3.9C733.4 914.6 913 735 913 514.3z" fill="#91B4FF" p-id="2375"></path><path d="M446.1 673.2c-6 0-12.1-2.3-16.7-6.9-9.2-9.2-9.2-24.2 0-33.4L700 362.3c9.2-9.2 24.2-9.2 33.4 0s9.2 24.2 0 33.4L462.8 666.3c-4.6 4.6-10.6 6.9-16.7 6.9z" fill="#3778FF" p-id="2376"></path><path d="M444.5 671.5c-6 0-12.1-2.3-16.7-6.9l-136-136c-9.2-9.2-9.2-24.2 0-33.4s24.2-9.2 33.4 0l136 136c9.2 9.2 9.2 24.2 0 33.4-4.6 4.6-10.7 6.9-16.7 6.9z" fill="#3778FF" p-id="2377"></path><path d="M185 807.9c-6.8 0-13.5-2.9-18.2-8.6-13.6-16.5-26.1-34-37.2-52.2-6.8-11.1-3.3-25.7 7.9-32.5 11.1-6.8 25.7-3.3 32.5 7.9 9.9 16.2 21.1 31.9 33.3 46.7 8.3 10.1 6.9 24.9-3.2 33.2-4.5 3.7-9.8 5.5-15.1 5.5z" fill="#3778FF" p-id="2378"></path><path d="M511.9 961.9c-93 0-182.2-28.3-258-81.8-10.7-7.5-13.2-22.3-5.7-32.9 7.6-10.7 22.3-13.2 32.9-5.7 67.7 47.8 147.5 73.1 230.7 73.1 220.8 0 400.4-179.6 400.4-400.4S732.7 113.9 511.9 113.9 111.6 293.5 111.6 514.3c0 38.3 5.4 76.2 16 112.6 3.7 12.5-3.5 25.6-16 29.3-12.6 3.6-25.6-3.5-29.3-16-11.9-40.7-17.9-83-17.9-125.8C64.4 267.6 265.2 66.8 512 66.8s447.6 200.8 447.6 447.6-200.9 447.5-447.7 447.5z" fill="#3778FF" p-id="2379"></path></svg></i>
      </span>
      <h4>匿名评价</h4>
    </div>
    <div class="submit" :class="{active:satisfySubmit}" @click="submit()">
      <span>提交</span>
    </div>
    <v-loading v-show="loading"></v-loading>
    <alert-tip :text="alertText" :showTip.sync="showTip"></alert-tip>
  </div>
</template>

<script>
  import star from './star.vue'
  import {makeComment, orderInfo} from '@/api/order'
  import {uploadToken, upload} from '@/api/upload'
  import config from '@/config'

  export default {
    data() {
      return {
        restaurant_info: {},  //商店信息
        deliveryScore: 1,   //配送评分
        foodScore: 1,       //食物评分
        hiddenName: false,
        commentValueLength: 0,
        satisfySubmit: false,
        commentData: '',
        uploadList: [],
        loading: false,
        alertText: '',      //提示
        showTip: false
      }
    },
    methods: {
      setDeliveryScore(score) {
        this.deliveryScore = score;
      },
      setFoodScore(score) {
        this.foodScore = score;
      },
      input($event) {
        this.commentValueLength = $event.target.value.length;
        this.satisfySubmit = this.commentValueLength >= 2;
      },
      deletePic(index) {
        this.uploadList.splice(index, 1);
      },
      fileUpload(event) {
        if (this.uploadList.length >= 3) {      //最多上传3张图片
          this.alertText = '最多上传3张图片'
          this.showTip = true;
          return;
        }
        this.loading = true;
        let file = event.target.files[0];
        uploadToken().then((response) => {   //获取上传凭证
          if (response.data.status === 200) {
            let data = {token: response.data.uptoken, file};
            upload(data).then((upResponse) => {     //上传到七牛云
              this.uploadList.push(config.domain + upResponse.data.key);
              this.loading = false;
            })
            this.$refs.referenceUpload.value = null;
          } else {
            this.alertText = response.data.message;
            this.showTip = true;
          }
        })
      },
      submit() {
        if (!this.satisfySubmit)
          return;
        makeComment({
          hidden_name: this.hiddenName,
          order_id: this.order_id,
          comment_data: this.commentData,
          food_score: this.foodScore,
          delivery_score: this.deliveryScore,
          pic_url: this.uploadList
        }).then((response) => {
          let res = response.data;
          let _this = this;
          _this.alertText = res.message;
          _this.showTip = true;
          if (res.status === 200) {
            setTimeout(() => {
              _this.$router.push('/index')
            }, 1000);
          }
        })
      },
    },
    created() {
      let order_id = this.order_id = this.$route.query.order_id;
      if (!order_id) {
        this.alertText = '参数有误';
        this.showTip = true;
        setTimeout(() => {
          this.$router.push('/index');
        }, 1000);
        return;
      }
      orderInfo({order_id}).then((response) => {
        let res = response.data;
        if (res.status === 200) {
          this.restaurant_info = res.data.restaurant;
        } else {
          this.alertText = res.message;
          this.showTip = true;
          setTimeout(() => {
            this.$router.go(-1)
          }, 500)
        }
      })
    },
    components: {
      star
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/mixin.scss";

  #comment {
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: #f4f4f4;
    .avatar {
      display: inline-block;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid $mtGrey;
      @include px2rem(width, 80);
      @include px2rem(height, 80);
      margin-right: 0.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .deliver-comment {
      background: #fff;
      .deliver-info {
        display: flex;
        padding: 0.5rem;
        .info-container {
          flex: 1;
          .deliver-type {
            font-size: 0.5rem;
            display: inline-block;
            margin-bottom: 0.2rem;
          }
          .deliver-time {
            font-size: 0.5rem;
            .time-error {
              float: right;
              font-size: 0.4rem;
              margin-top: 0.1rem;
              color: #508aca;
              .iconfont {
                border-radius: 50%;
                border: 1px solid #508aca;
              }
            }
          }
        }
      }
    }

    .main-container {
      background: #fff;
      margin-top: 0.5rem;
      padding: 0.2rem 0.5rem;
      .restaurant-info {
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        .restaurant-name {
          font-size: 0.5rem;
        }
      }

      .food-comment {
        position: relative;
        .comment-data {
          width: 100%;
          height: 100px;
          border: 1px solid $mtGrey;
        }
        .tip {
          color: $mtGrey;
          font-size: 0.4rem;
          position: absolute;
          right: 12px;
          bottom: 12px;
        }
      }

      .upload-picture-container {
        display: flex;
        margin: 0.3rem 0;
        align-items: center;
        .uplist-container {
          position: relative;
          margin-right: 0.2rem;
          border: 1px solid $mtGrey;
          .pic {
            @include px2rem(width, 140);
            @include px2rem(height, 140);
            img {
              width: 100%;
              height: 100%;
            }
          }
          .delete {
            position: absolute;
            right: -10px;
            top: -10px;
            @include px2rem(width, 45);
            @include px2rem(height, 45);
            text-align: center;
            border-radius: 50%;
            background: rgb(255, 76, 69);
            display: flex;
            justify-content: center;
            align-items: center;
            .icon-delete {
              font-size: 0.35rem;
              color: #fff;
            }
          }
        }

        .upload {
          display: inline-block;
          margin-right: 0.2rem;
          text-align: center;
          border: 1px solid $mtGrey;
          @include px2rem(width, 140);
          @include px2rem(height, 140);
          .upload-icon {
            @include px2rem(line-height, 140);
            font-size: 1rem;
          }
        }
        .upload-description {
          font-size: 0.4rem;
          p {
            margin-top: 0.2rem;
            color: $mtGrey;
          }
        }
      }
    }

    .hidden-name-comment {
      margin: 0.4rem 0.5rem;
      .selector {
        border-radius: 50%;
        display: inline-block;
        @include px2rem(width, 35);
        @include px2rem(height, 35);
      }
      .no-select {
        border: 1px solid $mtGrey;
      }
      .select {
        text-align: center;
        @include px2rem(line-height, 35);
        color: #fff;
        .iconfont {
          font-size: 0.5rem;
        }
      }
      h4 {
        display: inline-block;
        font-size: 0.4rem;
      }
    }

    .submit {
      margin-top: 0.3rem;
      background: #cbcbcb;
      @include px2rem(line-height, 95);
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      &.active {
        background: skyblue;
      }
      span {
        color: #fff;
        font-size: 0.5rem;
      }
    }
  }
</style>
