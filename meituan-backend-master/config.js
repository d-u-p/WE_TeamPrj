module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.1.117:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'meituana',   //七牛云bucket
    AccessKey: '05uoleU76m-xRYEsP_wz2vhfv5sTFKo1QzOs1emo',   //七牛云accessKey
    SecretKey: 'P5z1IlLFhjvhkbsJpJsVvsnZk-J3bciiErENlJlg',    //七牛云secretKey
    tencentkey: 'PH3BZ-QER6X-GXO4S-ZAJO5-6YWVK-NQFC6',        //腾讯位置secreKey
    tencentkey2: 'PH3BZ-QER6X-GXO4S-ZAJO5-6YWVK-NQFC6',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
};