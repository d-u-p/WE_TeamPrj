# Web工程第10组--西电外卖系统

## 小组成员

组长：

高源宏-18130500019

组员：

邓旭云-18130500054

贾景元-18130500232

刘宇杭-18130500135

苏炜迪-18130500031

汪子豪-18130500056

## 功能 ##

- 登录/注销
- IP定位
- 搜索地址
- 获取商店(计算当前位置和商店的距离)
- 加购物车
- 下订单
- 评价


## 技术栈 ##

- vue-cli搭建项目
- Vue全家桶(vue+vuex+vue-router)
- CSS预处理器SCSS
- axios与后端进行请求数据
- Express搭建后端服务
- Mongoose对MongoDB进行便捷操作

## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node
2、mongodb
```

```
git clone https://github.com/zwStar/vue-meituan.git

使用命令 mongorestore.exe -d <db_name> <bson_folder> 讲\meituan-backend-master\db里的文件导入本地数据库

终端切换到\meituan-backend-master目录

npm install

npm run dev

终端切换到\meituan-master目录

npm install

npm run serve

访问: http://localhost:8080 (确保后端项目服务已开启，且浏览器Network->Disable cache选项已勾选)

```

## 项目布局

```
.
├── api                             后端接口
├── config.js                       运行配置
├── assets                          静态资源
├── components                      全局组件
├── router                          路由
├── store                           vuex
├── styles                          全局样式
├── views                           页面
├── App.vue                         入口页面
├── main.js                         入口
├── .babelrc                        babel-loader 配置
├── .gitignore                      git 忽略项
├── favicon.ico                     favicon图标
├── index.html                      html模板
└── package.json                    package.json
.

```

# 更新日志

## 5.28

1.修改了界面以适配电脑页面

2.修改了定位不可以定到当前城市的设定，目前可以定位到准确位置

3.修改了数据库内容：商家经纬度，适配当前的准确位置

4.删除了无用按钮

5.删除了懒加载

待做：

1.完善支付和订单功能

## 5.31

1.优化了定位更加精确

2.门店位置再次优化以适应定位

3.优化了nav栏的每个选项按钮，现在可以通过点击不同的分类获取不同的商家列表

4.完善了地址系统，现在可以正常选择不同的收货地址，也可以正常添加收货地址

5.订单功能可以正常使用

6.评论功能可以正常使用

7.订单页返回按钮无法返回的问题修复了

8.将地址页面做成实时刷新的，当添加地址后可以直接看到最新添加的地址

