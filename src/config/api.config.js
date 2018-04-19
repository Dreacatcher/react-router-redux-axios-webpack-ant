module.exports = {
  //ajax测试
  'test_test_api_index': {
    'ajaxtest': 'common/area/list'
  },
  'common': {
    'areaList': 'sys/area/list', // 地区common/area/list
    'friendTopic': 'smartsales/trade/mall/sub/list' // 友情链接和专题活动
  },
  // 登录
  'login': {
    // 认证中心
    'login_identity': 'user/b2cmember/auth', //浏览器用户登录接口 b2cmember   //post
    'logout_identity': 'user/b2cmember/logout', //用户登出接口               //post
    'clear_identity': 'user/b2cmember/clear', //删除用户会话接口，根据用户ID删除缓存接口
    'verifyIimg_identity': 'verify/img/get', //获取图形验证码接口 createCode、getImgUrl //get
    'sendSms_identity': 'verify/sms/send', //登录短信发送接口                             //post
    'sendSmsTest_identity': 'verify/sms/send', //登录短信发送测试接口    //post
    'verifyText_identity': 'verify/text/get', //登录短信发送测试接口    //post

    // 'VerificationCode':'XIANGLONG/sendsms',  //x
    'checkBind': 'yundt/trade/member/check/mobile', //GET 用户是否绑定手机号
    'relevanceMobile': 'yundt/trade/member/check/relevance', //PUT 用户绑定接口
    'memberDetail': 'yundt/trade/member/account/detail/get', //member/memberDetail  //GET
    'loginCheck': 'status/check', //校验账号是否登录,状态是否正常common/login/check  //GET
    'register': 'yundt/trade/member/register', //member/register               //POST
    'sendSms': 'yundt/trade/member/password/sms/send' //注册/修改密码 专用 短信发送接口 sms/sendSms   //GET
    // 'getImgUrl': 'getImageVerifyCode' //图形验证码 //getImageVerifyCode         //POST
    // 'exit':'logout',//退出登录接口common/login/exit
  },
  //购物车
  'cart': {
    'myFavorites': 'yundt/trade/member/bookmark/item/list', //我的收藏商品列表查询接口member/collection/item/list    //GET
    'saveItemCollectionList': 'yundt/trade/member/bookmark/item/list/add', //批量加入我的收藏接口 //xmember/collection/saveItemCollectionList
    'addCollection': 'yundt/trade/member/bookmark/item/add', //加入我的收藏接口 member/collection/saveItemCollection    //POST
    'delItem': 'yundt/trade/cart/sku/delete', //删除购物车商品接口mall/cart/delItem      //DELETE
    'addItem': 'yundt/trade/cart/sku/add', //添加购物车商品接口mall/cart/addItem         //POST
    'list': 'yundt/trade/cart/item/list', //购物车商品列表信息查询接口mall/cart/item/list    //GET
    'updItemCount': 'yundt/trade/cart/sku/update', //修改商品数量mall/cart/item/update   //PUT
    'updateSku': 'yundt/trade/cart/sku/update', //修改商品规格mall/cart/itemSku/update   //pUT
    'itemSkuDetail': 'yundt/trade/item/sku/get', //mall/item/itemSku/detail    //GET
    'synch': 'yundt/trade/cart/sync', //同步购物车数据mall/cart/item/synch                   //POST
    'count': 'yundt/trade/cart/item/count' //同步购物车商品数量                   //GET
  },
  //结算
  'deal': {
    'address': 'yundt/trade/member/address/list', //订单结算-收货地址信息查询接口member/address/list   //GET
    'addressDefault': 'yundt/trade/member/address/status/update', //订单结算-收货地址信息设置默认member/address/setDefaultStatus   //PUT
    'neworder': 'yundt/trade/order/submit', //提交订单mall/order/submitOrder      //POST
    'itemDetails': 'yundt/trade/order/detail/list', //订单结算-订单商品明细查询mall/order/itemDetails
    'addItems': 'yundt/trade/cart/sku/add-by-batch', //订单详情批量加入购物车xianglong /mall/cart/addItems //POST
    'logistics': 'yundt/trade/logistics/waybill/detail/get', // 会员中心-交易管理-物流详情接口member/logistics/detail  //GET
    'paylist': 'smartsales/trade/settings/paytype/list', // 获取支付列表mall/order/pay/list        //GET
    'changePaymethod': 'yundt/trade/order/paytype/update', // 选择支付方式mall/order/changePaymethod    //POST
    'deliveryCostGet': 'yundt/trade/order/delivery/cost/get', // 运费查询
    'couponList': 'yundt/trade/promotion/order/list', //订单结算拆分，商品参与活动及优惠券信息列表 //POST
    'deliveryGet': 'yundt/trade/order/delivery/get', //订单结算拆分，运费查询 //POST
    'point': 'yundt/trade/member/point/consume/get' //订单结算拆分，积分查询 //GET
  },
  //商品详情
  'details': {
    'addCollection': 'yundt/trade/member/bookmark/item/add', //加入到收藏夹shoppingCart/items/collection      //POST
    'baseInfo': 'yundt/trade/item/detail/get', //加入到收藏夹mall/item/baseInfo     //GET
    'delivery': 'yundt/trade/logistics/delivery/list', //查询配送方式mall/delivery/info  //GET
    'commentStatistics': 'yundt/trade/comment/item/statistics', //商品详情评论统计mall/comment/item/list/statistics   //GET
    'commentList': 'yundt/trade/comment/item/list', //商品详情评论列表mall/comment/item/list     //GET
    'shareIntegral': 'yundt/trade/member/item/share', //分享送积分member/share/item              //POST
    'isCollection': 'yundt/trade/member/bookmark/item/exist', //检测是否有收藏   //xmember/collection/check
    'searchSuggest': 'smartsales/search/suggest', //商品搜索下拉提示item/searchSuggest   //x                    //GET
    'crumbs': 'yundt/trade/item/page/crumbs' //面包屑
  },
  //我的收货地址
  'adress': {
    'addresslist': 'yundt/trade/member/address/list', //我的收获地址列表member/address/list     //GET
    'addressDetail': 'yundt/trade/member/address/detail/get', //获取收货地址详情member/address/addressDetail      //GET
    'setDefaultStatus': 'yundt/trade/member/address/status/update', //设为默认地址member/address/setDefaultStatus   //PUT
    'addresscreate': 'yundt/trade/member/address/add', //新增收货地址member/address/create    //POST
    'deleteDeliveryAddress': 'yundt/trade/member/address/delete', //删除收货地址member/address/deleteDeliveryAddress   //DELETE
    'updateDeliveryAddress': 'yundt/trade/member/address/update' //修改收货地址member/address/updateDeliveryAddress    //PUT
  },
  //完善个人信息
  'accountEdit': {
    'memberDetail': 'yundt/trade/member/detail/get', //获取当前用户个人信息member/memberDetail    //GET
    'updateMember': 'yundt/trade/member/update', //获取收货地址详情member/updateMember           //PUT
    'memberImgUpload': 'yundt/trade/member/avatar/update', //上传头像,member/update/imgurl           //PUT
    'account_join': 'yundt/trade/member/third/account/binding', //绑定第三方登录
    'account_join_update': 'yundt/trade/member/third/relevance', //第三方登录绑定或解绑
    'account_join_register': 'yundt/trade/member/third/register', //第三方登录新增手机绑定
    'account_join_removebing': 'yundt/trade/member/third/account/removebing' //第三方登录解绑

  },
  //我的收藏列表
  'collection': {
    'collectionlist': 'yundt/trade/member/bookmark/item/list', //获取收藏列表member/collection/item/list  //GET
    'deleteItemCollection': 'yundt/trade/member/bookmark/item/delete', //删除我的收藏物品member/collection/deleteItemCollection  //DELETE
    'shoppingCart': 'yundt/trade/cart/sku/add' //加入购物车mall/cart/addItem    //POST
  },
  //我的订单
  'order': {
    'reBuy': 'yundt/trade/order/myorder/rebuy', //获取该订单数据mall/order/reBuy   //POST
    'orderlist': 'yundt/trade/order/myorder/list', //订单列表member/order/list              //GET
    'orderDetail': 'yundt/trade/order/myorder/detail/get', //会员中心-交易管理-订单详情查询接口 member/order/detail   //GET
    'receiveOrder': 'yundt/trade/order/myorder/receive', //确认收获mall/order/receiveOrder  //PUT
    'cancelOrder': 'yundt/trade/order/myorder/cancel', //取消订单mall/order/cancelOrder  //PUT
    'mergePay': 'yundt/trade/order/myorder/mergepay', //合并付款mall/order/mergePay      //POST
    'quickpay': 'yundt/trade/order/myorder/quickpay', //立即付款       //get
    'logistics': 'yundt/trade/order/logistics/detail/get' //立即付款       //get
  },
  //搜索列表
  'proList': {
    'proListprops': 'mall/index/item/props', //商城商品搜索列表查询-全部结果(筛选条件查询)  //x
    'list': 'smartsales/search/item', //商品列表  mall/item/list        //POST
    'saveItemCollection': 'yundt/trade/member/bookmark/item/add', //加入收藏member/collection/saveItemCollection   //POST
    'addItem': 'yundt/trade/cart/sku/add', //加入购物车mall/cart/addItem     //POST
    'IndexItemList': 'smartsales/trade/brand/item/list', //品牌跳转相关列表 mall/index/brand/item/list   //GET
    'qrcode': 'sys/app/manager/qrcode/get' //获取app下载链接  smartsales/trade/mall/o2oapp/link/get  mall/index/interlinkage   //GET
  },

  //账号
  'account': {
    'updatepwd': 'yundt/trade/member/password/update', //找回密码/修改密码(接口)member/updatepwd    //PUT
    'userupdatepwd': 'yundt/trade/member/update/password', //找回密码/修改密码(更改接口)member/updatepwd    //PUT
    'sendsmstest': 'authgateway/XIANGLONG/sendsmstest' //手机验证码发送接口
  },
  //支付
  'pay': {
    'chek': 'yundt/trade/order/payment/get', //轮询服务器，交易状态mall/order/selectOrder    //GET
    'qrimg': 'yundt/trade/order/payment/qrcode/get' //获得二维图地址mall/order/makeQrcode   //GET
  },
  //个人中心
  'usercenter': {
    'levelIntegral': 'yundt/trade/member/point/detail/list', //我的积分member/levelIntegral/record   //GET
    'level': 'yundt/trade/member/level/list', //等级列表member/level/list  //GET
    //'rule': 'member/rule/list',//等级列表   //x

    'mycommentList': 'yundt/trade/comment/mycomment/list', //我的评价列表mall/comment/member/list   //GET
    'mycommentItemInfo': 'yundt/mgmt/order/item/itemInfo', //评价-商品信息 mall/comment/item/itemInfo      yundt/trade/comment/list-by-order //GET

    // 'articletypeList': 'yundt/trade/content/articletype/list',  //帮助中心-文章类型-列表 member/help/type/list  //GET
    // 'articleList': 'yundt/trade/content/article/list',  //帮助中心-文章-列表 member/help/article/list   //GET

    'articleNav': 'yundt/trade/content/help/classifica/list', //服务中心-文章列表 member/help/type/list  //GET
    'articleDetail': 'yundt/trade/content/help/classifica/get', //服务中心-文章详情 member/help/article/list   //GET
    'article': 'yundt/trade/content/article/detail/get', //服务中心-文章 //GET
    'articleList': 'smartsales/trade/mall/link/list', //首页-底部-服务中心链接 //GET

    'mymessageList': 'smartsales/trade/message/mymessage/list', //官方商城-我的消息-列表  b2c/message/mynews/list  //GET

    'reasonList': 'yundt/trade/defdoc/detail/get', //退货退款原因   code 退款原因 001 退货原因 002
    'aftersalesList': 'yundt/trade/order/aftersales/list', //用户售后列表order/aftersale/list  //GET       退货
    'refundList': 'yundt/trade/order/refund/list', //  退款管理列表order/aftersale/refund/list
    'returnDetailList': 'yundt/trade/order/return/returnableitem/list', // 退货页面商品详情列表      //GET
    'returnDetail': 'yundt/trade/order/return/detail/get', // 退货页面商品详情      //GET

    'refundableitemList': 'yundt/trade/order/refund/refundableitem/list', //
    'refundDetail': 'yundt/trade/order/refund/detail/get', // 退款详情查询 order/aftersale/refund/detail  //GET
    'cancelRefund': 'yundt/trade/order/refund/cancel', //取消退款
    'logisticsList': 'yundt/trade/order/refund/logistics/list', //快递下拉列表
    // 'returnDetail': 'member/order/return/detail',   //
    'msgDelete': 'smartsales/trade/message/mymessage/delete', // 官方商城-我的消息-删除 /b2c/message/mynews/delete   //delete
    'msgList': 'smartsales/trade/message/mymessage/list', // 我的消息-列表 /b2c/message/mynews/list                 //get
    'msgUpdateStatus': 'smartsales/trade/message/mymessage/status/update', // 我的消息-标记为已读 //b2c/message/mynews/update     //put
    'noticeList': 'smartsales/trade/mall/notice/list', //公告列表 get
    'noticeDetail': 'smartsales/trade/mall/notice/detail/get' //公告详情 get


  },

  //我的优惠券
  'userCoupon': {
    'couponlist': 'yundt/trade/promotion/mycoupon/list', //我的优惠券列表member/coupon/list   //GET
    'couponSearch': 'yundt/trade/promotion/mycoupon/searchcondition/list' //下拉赛选列表member/coupon/search  //GET
  },
  //领券中心
  'Coupon': {
    'couponlist': 'yundt/trade/promotion/coupon/list', //优惠券列表member/coupon/center/list   //GET
    'centerreceive': 'yundt/trade/promotion/coupon/collect', //领取优惠券member/coupon/center/receive   //POST
    'banners': 'smartsales/trade/promotion/coupon/banner/list' //会员中心-领券中心-Banner图/券类型查询接口member/coupon/center/banners  //GET
    // 'receiveStatus':'member/coupon/center/receiveStatus' ,  //x
  },

  //发票管理
  'invoice': {
    'update': 'yundt/trade/order/myorder/invoice/update', // 我的订单页-修改发票/mall/order/invoice/upd  //PUT
    'query': 'yundt/trade/order/invoice/get', // 查询发票 /mall/order/invoice/realquery  //GET
    'list': 'yundt/trade/invoice/list', // 发票列表   //GET
    'deleteOne': 'yundt/trade/invoice/delete', //  发票删除   //delete
    'add': 'yundt/trade/invoice/add', // 发票新增 //post
    'detail': 'yundt/trade/invoice/detail/get', // 发票详情  //GET
    'usercenter_update': 'yundt/trade/invoice/update' // 发票管理-修改发票  //GET
  },
  //大额支付
  'Wholesale': {
    'login': 'user/o2omember/auth', //用户登录接口 usAuth/o2omember
    'logout_identity': 'user/o2ocmember/logout', //用户登出接口  //用户登出接口
    'clear': 'user/o2omember/clear', //删除用户会话接口
    'verifyIimg': 'verify/img/get', //获取图形验证码接口
    'memberDetail': 'yundt/trade/member/detail/get', //我的-个人中心-个人中心首页信息接口  app/member/memberDetail //GET
    'accountMemberDetail': 'yundt/trade/member/account/detail/get', //member/memberDetail  //GET
    'sendCode': 'verify/sms/send', //登录短信发送接口 sendsms
    'sendsmstest': 'verify/sms/test/send', //登录短信发送测试接口 sendsms
    'paylist': 'smartsales/trade/settings/paytype/list', //支付方式 - 列表页 mall/order/pay/list  //GET
    'changePaymethod': 'yundt/trade/order/paytype/update', //订单结算-选择支付方式 app/order/changePaymethod       //POST
    'largecashList': 'yundt/trade/order/myorder/list', //交易管理-大额订单查询接口  /app/member/order/largecash/list   //GET
    'largecashDetail': 'yundt/trade/order/myorder/detail/get'
  },
  //通过区查询街道
  'area_subList': 'sys/area/street/list', //获取区域街道信息接口//common/area/subList   //GET
  'area_subListData': 'sys/area/list' //获取区域三级联动接口
}