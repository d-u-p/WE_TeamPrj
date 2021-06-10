<!--我的页面-->
<template>
  <div id="home">
    <v-head title="我的" goBack="true"></v-head>
    <div id="user-info">
      <router-link v-if="!username" class="login" to="/login">登录/注册</router-link>
      <span v-else class="username">用户：{{username}}</span>
      <button v-if="username" class="logout" @click="logout">退出登录</button>
    </div>
    <div class="fun-container">
      <ul>
        <li v-for="(item,index) in myFunList" :key="index" @click="routerChange(item.url)">
          <div class="img-wrap">
            <svg t="1622542842805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3086" width="80" height="80"><path d="M863.83 899.04H248.74c-20.25 0-30.96-23.97-17.43-39.05l42.16-47.01a46.285 46.285 0 0 1 34.44-15.37h496.74a46.27 46.27 0 0 1 34.44 15.37l42.16 47.01c13.53 15.08 2.83 39.05-17.42 39.05zM792.9 359.3c0 96.84-131.2 299.71-197.26 395.72-17.89 26-56.26 26-74.15 0-66.06-96.01-197.26-298.88-197.26-395.72 0-129.42 104.92-234.34 234.34-234.34S792.9 229.88 792.9 359.3z" fill="#99D1FF" p-id="3087"></path><path d="M819.25 919.04H173.32c-14.62 0-27.4-8.29-33.36-21.64-5.96-13.35-3.6-28.4 6.16-39.28l66.25-73.86c7.38-8.22 20.02-8.91 28.24-1.53 8.22 7.38 8.91 20.02 1.53 28.24l-61.06 68.08h630.4l-61.06-68.08c-7.38-8.22-6.69-20.87 1.53-28.24 8.22-7.38 20.87-6.69 28.24 1.53l66.25 73.86c9.76 10.88 12.12 25.94 6.16 39.29-5.95 13.34-18.73 21.63-33.35 21.63z m-2.58-34.22h0.01-0.01z" fill="#0072F0" p-id="3088"></path><path d="M486.49 794.52c-21.4 0-41.42-10.53-53.55-28.16-34.06-49.5-83.3-124.25-124.46-199.26-51.36-93.6-76.32-161.57-76.32-207.79 0-67.94 26.46-131.81 74.49-179.84 48.04-48.04 111.91-74.49 179.84-74.49s131.81 26.46 179.84 74.49c48.04 48.04 74.49 111.91 74.49 179.84 0 46.23-24.97 114.2-76.32 207.79-41.16 75.01-90.4 149.76-124.46 199.26a64.994 64.994 0 0 1-53.55 28.16z m0-649.56c-57.25 0-111.08 22.29-151.56 62.78s-62.78 94.31-62.78 151.56c0 26.66 12.39 81.02 71.39 188.55 40.36 73.55 88.81 147.09 122.35 195.83 4.74 6.89 12.25 10.83 20.6 10.83s15.86-3.95 20.6-10.83c33.54-48.74 81.99-122.28 122.35-195.83 59.01-107.53 71.39-161.89 71.39-188.55 0-57.25-22.29-111.08-62.78-151.56s-94.31-62.78-151.56-62.78z" fill="#0072F0" p-id="3089"></path></svg>
          </div>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <v-bottom></v-bottom>
    <router-view></router-view>
    <v-loading v-show="loading"></v-loading>
    <alert-tip :text="alertText" :showTip.sync="showTip"></alert-tip>
  </div>
</template>

<script>
  import {userInfo, changeAvatar,logout} from '@/api/user'
  import {getInfo} from '@/utils/auth'
  import {uploadToken, upload} from '@/api/upload'
  import config from '@/config'

  export default {
    data() {
      return {
        username: null,
        avatar: 'http://i.waimai.meituan.com/static/img/default-avatar.png',
        loading: false,
        alertText: '',
        showTip: false,
        myFunList: [
          // {
          //   url: '/home/collection',
          //   picUrl: 'http://p1.meituan.net/50.0.100/xianfu/9c1388ba5fbb367c1a93996f39c2fba94506.jpg',
          //   name: '我的收藏'
          // },
          // {
          //   url: '/home/footprint',
          //   picUrl: 'http://p1.meituan.net/50.0.100/xianfu/7ad7da19bfadd5e6081b7606025214254582.jpg',
          //   name: '我的足迹'
          // },
          // {
          //   url: '/home/comment',
          //   picUrl: 'http://p0.meituan.net/50.0.100/xianfu/5d02f44df0f9f26ea0eca95957824bae4444.jpg',
          //   name: '我的评价'
          // },
          // {
          //   url: '/home/friend',
          //   picUrl: 'http://p1.meituan.net/50.0.100/xianfu/bbae84a587711ac12badb9453406ad694851.jpg',
          //   name: '我的好友'
          // },
          // {
          //   url: '/home/thank',
          //   picUrl: 'http://p1.meituan.net/50.0.100/xianfu/5c1bf832376403ca2ab22b8d8748e0fd5479.jpg',
          //   name: '答谢记录'
          // },
          {
            url: '/home/address',
            picUrl: 'http://p0.meituan.net/50.0.100/xianfu/a813bff1813024b05ff45422deac24bd4276.jpg',
            name: '我的地址'
          }],
        myAssetsList: [
          {
            name: '红包',
            picUrl: 'http://p1.meituan.net/50.0.100/xianfu/a361ce97f9f00f2715bb960a789d925e2315.jpg',
          },
          {
            name: '代金券',
            picUrl: 'http://p0.meituan.net/50.0.100/xianfu/875f13a76045b7f6862a2b7149babec32329.jpg',
          },
          {
            name: '钱包',
            picUrl: 'http://p1.meituan.net/50.0.100/xianfu/2c14b3425c7bf1f3d63d11f47a7ef9ea2230.jpg',
          },
          {
            name: '余额',
            picUrl: 'http://p0.meituan.net/50.0.100/xianfu/7b3e3fb4fc9b45dcda74d7e916f025ea2878.jpg'
          }
        ],
        introList: [
          {
            picUrl: 'http://p0.meituan.net/50.0.100/xianfu/cf5ddfcae114ed8d7d147d51064532252477.jpg',
            name: '邀请有奖'
          },
          {
            picUrl: 'http://p1.meituan.net/50.0.100/xianfu/55748d5fa531a057258f68d029fe20542466.jpg',
            name: '商家入驻'
          },
          {
            picUrl: 'http://p1.meituan.net/50.0.100/xianfu/317aabdd31dfcfa1739149089a2e041a2780.jpg',
            name: '帮助与反馈'
          },
          {
            picUrl: 'http://p0.meituan.net/50.0.100/xianfu/55454d4faaed6ad212b2b8a929edef372425.jpg',
            name: '在线客服'
          },
        ]
      }
    },
    methods: {
      logout(){
        logout();
        this.$forceUpdate();
        this.username=''
      },
      fileUpload(event) {
        this.loading = true;
        let file = event.target.files[0];
        if (file.size > 1024 * 1024 * 3) {    //只能传2M以内照片
          this.alertText = '上传失败，只能传2M以内图片'
          this.showTip = true;
        } else {
          uploadToken().then((response) => {
            if (response.data.status === 200) {
              let data = {token: response.data.uptoken, file}
              upload(data).then((upResponse) => {
                let pic_url = config.domain + upResponse.data.key
                this.avatar = pic_url;
                this.loading = false;
                changeAvatar({pic_url}).then(() => {
                })     //更新到数据库
              })
            } else {
              this.alertText = response.data.message
              this.showTip = true;
            }
          })
        }
      },
      routerChange(url) {
        if (this.username) {
          this.$router.push(url);
        } else {
          this.$router.push('/login');
        }
      }
    },
    mounted() {
      this.username = getInfo();
      if (this.username) {
        userInfo().then((response) => {
          this.avatar = response.data.data.avatar;
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/common.scss";
  @import "../../style/mixin.scss";

  #home {
    margin: 0 auto;
    width:1200px;
    height: 100%;
    background: rgb(244, 244, 244);
  }

  #user-info {
    @include px2rem(height, 200);
    color: #000;
    display: flex;
    align-items: center;
    background: #fff;
    .avatar {
      @include px2rem(width, 115);
      @include px2rem(height, 115);
      text-align: center;
      margin: 0 0.8rem;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #333;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      display: inline-flex;
      margin-left:50px;
      justify-content: center;
      align-items: center;
      height:50px;
      width:100px;
      font-size: 0.4rem;
      font-weight: 500;
      background-color:skyblue;
      border: 1px solid #e0e0e0;
    }
    .logout {
      margin-left:950px;
      height:50px;
      width:100px;
      font-size: 0.4rem;
      font-weight: 500;
      background-color:skyblue;
      border: 1px solid #e0e0e0;
    }
    .username {
      font-size: 0.5rem;
    }
  }

  .fun-container {
    margin-top: 0.3rem;
    background: #fff;
    ul {
      @include clearfix;
      li {
        width: 25%;
        @include px2rem(height, 145);
        float: left;
        text-align: center;
        margin: 0.2rem 0;
        .img {
          @include px2rem(width, 70);
          @include px2rem(height, 70);
          margin: 0.1rem auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          font-size: 0.35rem;
        }
      }
    }
  }

  .assets, .intro {
    margin-top: 0.2rem;
    background: #fff;
    h3 {
      font-size: 0.5rem;
      margin-left: 0.3rem;
      padding-top: 0.3rem;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid $bottomLine;
    }
    ul {
      display: flex;
      padding: 0.3rem 0;
      li {
        flex: 1;
        text-align: center;
        .img {
          @include px2rem(width, 55);
          @include px2rem(height, 55);
          margin: 0.1rem auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          font-size: 0.35rem;
        }
      }
    }
  }
  .intro {
    padding-bottom: 1rem;
  }
</style>
