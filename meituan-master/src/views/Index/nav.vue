<!--首页nav组件-->
<template>
  <nav>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item class="lists" v-for="(item,index) in categoryListSort" :key="index">
        <span class="title">全部分类</span>
        <router-link
          class="type"
          v-for="foodList in item"
          :to="{path:'/category',query:{type:foodList.name,flag:foodList.flag}}"
          :key="foodList.id">

          <div class="category-img">
            <img :src="foodList.url">
            <span class="category-name">{{foodList.name}}</span>
          </div>
          
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </nav>
</template>

<script>

  import {Swipe, SwipeItem} from 'mint-ui';
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        categoryList: [
          {
            name: '美食',
            url: 'http://p1.meituan.net/jungle/bd3ea637aeaa2fb6120b6938b5e468a13442.png',
            type: 'food',
            flag: 0
          },
          {
            name: '美团超市',
            url: 'http://p0.meituan.net/94.0.100/jungle/6b93ee96be3df7cf2bb6e661280b047d3975.png',
            type: 'supermarket',
            flag: 1
          },
          {
            name: '生鲜果蔬',
            url: 'http://p0.meituan.net/94.0.100/jungle/f33ed552c52b4466b6308a2c14dbc62d4882.png',
            type: 'fruit',
            flag: 2
          },
          {
            name: '下午茶',
            url: 'http://p0.meituan.net/94.0.100/jungle/af6cf63a5dfeb3557bf3099b03002ec34124.png',
            type: 'tea',
            flag: 3
          },
          {
            name: '正餐优选',
            url: 'http://p1.meituan.net/94.0.100/jungle/1543bbcb048218424e2420a6934e17b24236.png',
            type: 'dinner',
            flag: 4
          },
          {
            name: '汉堡披萨',
            url: 'http://p1.meituan.net/94.0.100/jungle/0e63b86b4ff14d214c1999a979fd21d14273.png',
            type: 'pizza',
            flag: 5 
          },
          {
            name: '跑腿代购',
            url: 'http://p1.meituan.net/94.0.100/jungle/b40b7d72233f7a76dd9d97af40b4b8975414.png',
            type: 'buyOnSomebody',
            flag: 6
          },
          {
            name: '快餐简餐',
            url: 'http://p0.meituan.net/94.0.100/jungle/deeea00bb23e4fae31ea154678c7a8003838.png',
            type: 'fastFood',
            flag: 7
          },
          {
            name: '地方菜',
            url: 'http://p1.meituan.net/94.0.100/jungle/b6033c2f9aa26cdf37ea24fb1346d2dc4690.png',
            type: 'localDish'
          },
          {
            name: '炸鸡美食',
            url: 'http://p0.meituan.net/94.0.100/jungle/0ce9a33a4accc536ac9e2d8d91951c924673.png',
            type: 'chicken'
          },
          {
            name: '免配送费',
            url: 'http://p0.meituan.net/94.0.100/jungle/f5ef975cae40ecc1a21dae61f44575d59129.png',
            type: 'freeDeliver'
          }
        ],
        categoryListSort: []
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    computed: {
      ...mapGetters(['address'])
    },
    created() {
      // 对列表进行排序为2维数组 用于轮播图 每页轮播图有8个item
      let resArr = [...this.categoryList];
      for (let i = 0, j = 0; i < this.categoryList.length; i += 8, j++) {
        this.categoryListSort[j] = resArr.splice(0, 8);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/mixin";

  nav {
    margin-top:10px;
    @include px2rem(height, 570);
    .lists {
      border: 1px solid #E5E5E5;
      width:200px;
      height: 100%;
      display: inline-flex;
      flex-direction: column;
    }
    .title {
      margin:20px;
      font-size:15px;
      font-weight:700
    }
    .type {
      width: 25%;
      text-align: center;
      @include px2rem(height, 30);
      margin: 0.2rem 0;
      display: inline;
      flex-direction: column-reverse;
      .category-img {
        margin-left: 20px;
        display: inline-flex;
        @include px2rem(width, 200);
        @include px2rem(height, 95);
        img {
          width: 20%;
          height: 42%;
        }
      }
    }
  }

  .category {
    height: 50px;
  }

  .lists {
    width: 100vw;
    height: 100px;

    vertical-align: top;
    .category-img {
      img {
        width: 100%;
        height: 30%;
        margin-bottom: 0.3rem;
      }
    }
    .category-name {
      display: inline-block;
      margin: 8px 0 0 8px;
      font-size: 0.1rem;
    }
  }

  .category {
    margin: 0.5rem 0;
    .slide-box {
      .lists {
        li {
          width: 25%;
          display: inline-block;
          padding: 0.2rem;
          text-align: center;
        }
      }
    }
  }
</style>
