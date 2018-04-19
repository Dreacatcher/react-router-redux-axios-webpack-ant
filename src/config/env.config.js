module.exports = {
  development: { // 测试环境
    theme: 'default',
    apiHost: 'https://dev.dtyunxi.cn:8310/', // api host 前缀
    siteHost: '/smartsales-b2c-web-pc/', // 网站url地址
    webStaticUrl: '/smartsales-b2c-web-pc/public/', // 网站静态资源url地址
    apiIdentHost: 'https://dev.dtyunxi.cn:8310/huieryun-identity/api/v1/auth/XIANGLONG/', // 认证中心的api host 前缀
    apiUpfile: 'https://dev.dtyunxi.cn:8310/smartsales-trade-application/api/v1/huieryun/objectstorage/policy/XIANGLONG/getpolicy', // 阿里云文件上传接口地址
    weblog: true, // 是否开启埋点
    weblogHost: 'http://test.dtyunxi.cn:8300/yundt-data-buriedpoint/data', // 埋点地址
    version: 'v0.7.0',
    appCode: 1,
    // 大额支付地址前缀
    wholesale_apiHost: 'https://dev.dtyunxi.cn:8310/',
    wholesale_apiIdentHost: 'https://dev.dtyunxi.cn:8310/huieryun-identity/api/v1/auth/XIANGLONG/',
    // 搜索功能地址前缀
    Search_apiHost: 'https://dev.dtyunxi.cn:8310/smartsales-search-application/api/v1/'
  },
  test: { // 测试环境
    theme: 'default',
    // apiHost:'https://192.168.33.12:8310/newretail-gateway/api/v1/',//api host 前缀
    siteHost: 'https://192.168.137.1:7001/', // 网站url地址
    webStaticUrl: 'https://192.168.137.1:7001/public/', // 网站静态资源url地址
    apiIdentHost: 'https://192.168.33.12:8310/huieryun-identity/api/v1/authgateway/XIANGLONG/', // 认证中心的api host 前缀
    apiUpfile: 'https://192.168.33.12:8310/newretail-gateway/api/v1/huieryun/objectstorage/policy/XIANGLONG/getpolicy', // 阿里云文件上传接口地址
    weblog: true, // 是否开启埋点
    weblogHost: 'http://192.168.33.12:8033', // 是否开启埋点
    version: 'v0.7.0',
    appCode: 1
  },
  production: { // 生产环境
    theme: 'default',
    apiHost: 'http://192.168.33.10:8300/', // api host 前缀
    siteHost: '/smartsales-b2c-web-pc/', // 网站url地址
    webStaticUrl: '/smartsales-b2c-web-pc/public/', // 网站静态资源url地址
    apiIdentHost: 'http://192.168.33.10:8300/huieryun-identity/api/v1/auth/XIANGLONG/', // 认证中心的api host 前缀
    apiUpfile: 'http://192.168.33.10:8300/smartsales-trade-application/api/v1/huieryun/objectstorage/policy/XIANGLONG/getpolicy', // 阿里云文件上传接口地址
    weblog: true, // 是否开启埋点
    weblogHost: 'http://test.dtyunxi.cn:8300/yundt-data-buriedpoint/data', // 埋点地址
    version: 'v0.7.0',
    appCode: 1,
    // 大额支付地址前缀
    wholesale_apiHost: 'http://192.168.33.10:8300/',
    wholesale_apiIdentHost: 'http://192.168.33.10:8300/huieryun-identity/api/v1/auth/XIANGLONG/',
    // 搜索功能地址前缀
    Search_apiHost: 'http://192.168.33.10:8300/smartsales-search-application/api/v1/'
  }
}