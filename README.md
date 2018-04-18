### 本react框架基于react+router+redux+axios+webpack+ant单页面应用

## 目录
####  [技术栈](#features)

####  [快速开始](#getting-started)
  * [安装、部署](#installation)  

####  [项目架构](#architecture)  
  * [目录结构](#tree)
  * [特色](#character)   

####  [开发](#development)
  * [Webpack 配置](#webpack-configure)
  * [规范](#standard)
  * [性能](#performance)
  
####  [测试](#testing)  

####  [参考](#reference)

****

## <a name="features"> 技术栈</a>
> 详情可参阅 `package.json` 

* React 15.3.0
* Redux
* React Router
* axios 请求
* Webpack
* ES6 + Babel
* ant

***

## <a name="getting-started"> 快速开始</a>
> 在项目开发前开始前，希望您已通读如下资料
* [React 文档][react-doc]  
* [Redux 文档][redux-doc]
* [React Router 文档][react-router-doc]  
* 同时您还需要熟悉ES6[ES6](http://es6.ruanyifeng.com/)  

### <a name="installation">⊙ 安装、部署</a>  
> 推荐升级到 node 5.x/6.x + npm 3.x 环境，**强烈推荐**使用 [`cnpm`](https://github.com/cnpm/cnpm) 安装依赖或手动     
> 切换到淘宝 npm 源：`npm set registry https://registry.npm.taobao.org/`     
> （经测试，`cnpm` 对于 `node-sass` 等问题多多的 Package 拥有秒杀能力）   

本示例项目需要结合 [cnode给出公共api RESTful API](http://cnodejs.org/api)     
> 安装(install)  
```

git clone

``` 
>  安装依赖   
```

npm install

``` 
> 启动  
```

npm start

```

> 部署  
```

npm run build

```

> 如无意外，默认浏览器就会自动打开 `localhost:9090`，您立即可以看到效果  若浏览器没有自动弹出，则请自行手动访问  
> 您可以使用命令行静态资源服务器 [serve](https://github.com/tj/serve) ( `npm i serve -g` )，敲下 `serve dist/ -p [端口]` 来快速查看 build 后的项目  
***

## <a name="architecture"> 项目架构</a>
### <a name="tree">⊙ 目录结构</a>
```
.
├─ build                    # Webpack 配置目录
├─ dist/                    # build 生成的生产环境下的项目
├── src                     # 源码目录（开发都在这里进行）
│   ├── assets              # 放置需要经由 Webpack 处理的静态文件
│   │   ├── img             # 公用项目组件图片
│   │   ├── font            # 字体图标（使用阿里的）
│   │   ├── js              # js文件库
│   │   └── less            # 公用样式及存放共用变量
│   ├── components          # 组件（COMPONENT）
│   │   ├── demo            # 页面木偶组件
│   │   ├── todo            # 页面木偶组件
│   │   └── ui              # 项目公用组件
│   ├── config              # 接口配置和全局变量配置
│   ├── redux               # Redux 
│   │   ├── actions         # （ACTION）
│   │   ├── reducers        # （REDUCER）
│   │   └── store           # （STORE）
│   ├── routes              # 路由（ROUTE）
│   │   └── _include        # 页面路由（ROUTE）
│   ├── services            # 服务（SERVICE，用于统一管理 XHR 请求，这是从 Vue Demo 中直接复制过来的）
│   │   └── utils           # 接口工具库（UTIL）
│   ├── utils               # 组件工具库（UTIL）
│   │   ├── HoC             # 高阶组件（HOC，全称 Higher Order Component）
│   │   └── mixins          # 混合（MIXIN）
│   └── views               # 路由视图基页（VIEW）
│       └── todo            # 路由视图页面文件（VIEW）
├── static/                 # 放置无需经由 Webpack 处理的静态文件
├── .babelrc                # Babel 转码配置
├── .eslintignore           # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc               # ESLint 配置
├── .gitignore              # （配置）需被 Git 忽略的文件（夹）
├── package.json            # （依赖包及整个项目入口）
```

### <a name="character">⊙ 特色</a>
* 本示例项目秉承最佳实践，**高度洁癖**地实现代码分离/复用
* 优化目录结构，更好的模块分离，更接近 Vue 的开发模式
* Redux DevTools，可选 [Chrome 插件形式][chrome-extension]（默认） 或 内嵌页面的[组件形式][devtools-component]
* [Redux Logger][redux-logger] 打印动作及前后状态变化
* [why-did-you-update][why-did-u-update] 检测不必要的组件重渲染（默认关闭）
* 引入服务层统一管理
* api和环境进行统一配置（见config文件夹）
* 引入 [路径别名](#alias) 实现优雅的加载模式
* 引入 [React Hot Reload][hot-loader]，支持热替换
* 生产环境下的编译对代码进行[优化][react-optimize]

***

## <a name="development"> 开发</a>
### <a name="webpack-configure">⊙ Webpack 配置</a>
> 由于已经拥有相对成熟的 Webpack 配置，因此在一定程度上您可以不求甚解，但了解其配置会更能把握整体开发    

* 前端开发服务器为 `localhost:9090`，可在 `build/webpack.dev.conf.js` 中找到  
> 后端 RESTful API 基地址写在了   `src/services/xhr/config.js` 中，请根据实际自行修改

* 框架 / 类库 须分离打包以加快开发时的编译速度并有利于缓存，详见 `build/webpack.base.conf.js` 中的 `vendor`  
> 实际上该步骤可通过读取 `package.json` 的 `dependencies` 字段实现自动化，但其灵活度不够高，必要性也不大    
> P.S. 安装包时勿忘 `--save / --save-dev` 以添加依赖记录  

* <a name="alias">**路径别名**</a> 的定义位于   `build/webpack.base.conf.js`，好处就是**引入与重构都很方便**
> 例如，在某组件中，引入 `userService` 需要 `import   userService from '../../../services/userService'`  
> 但有了路径别名后，只需要 `import userService from 'SERVICE/userService'`    
> 相比于 AngularJS 中的依赖注入，这种方式依赖于构建工具，显得更为简单    



### <a name="standard">⊙ 规范</a>
> 本示例项目的代码极尽详细地添加了注释，而且遵循eslint规范   
* eslint规范文档 · [eslint规范](http://eslint.cn/docs/user-guide/configuring)  

### <a name="performance">⊙ 性能</a>  
大概可参阅如下文章：

* React 文档 · [Advanced Performance](https://facebook.github.io/react/docs/advanced-performance.html)
* 反鸡汤 · [Should I use shouldComponentUpdate](http://jamesknelson.com/should-i-use-shouldcomponentupdate/)（[译文](http://www.infoq.com/cn/news/2016/07/react-shouldComponentUpdate)）
* 淘宝 FED · [高性能 React 组件](http://taobaofed.org/blog/2016/08/12/optimized-react-components/)

***

## <a name="testing"> 测试</a>
> 请自行选择测试工具

***


> 关于生产环境下的部署与优化，已超出本文档的论述范围，请自行查阅相关资料  

***

## <a name="reference"> 参考</a>
* [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
* [探讨 React 项目目录结构](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)

[vue-cli]: https://github.com/vuejs/vue-cli
[vue-cli-template]: http://vuejs-templates.github.io/webpack/structure
[vue-demo]: https://github.com/kenberkeley/vue-demo
[react-doc]: http://reactjs.cn/react/docs/getting-started-zh-CN.html
[redux-doc]: http://camsong.github.io/redux-in-chinese/index.html
[simple-tutorial]: https://github.com/kenberkeley/redux-simple-tutorial
[react-router-doc]: http://react-guide.github.io/react-router-cn/
[babel-repl]: http://babeljs.io/repl/
[how-to-start]: https://github.com/kenberkeley/react-demo/issues/1
[service-intro]: https://github.com/kenberkeley/vue-demo#service-layer
[alias-intro]: https://github.com/kenberkeley/vue-demo#alias
[createContainer]: https://github.com/kenberkeley/react-demo/blob/master/src/utils/createContainer.js
[Navbar]: https://github.com/kenberkeley/react-demo/blob/master/src/components/Navbar/index.js
[connect]: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
[dan-post]: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
[chrome-extension]: https://github.com/zalmoxisus/redux-devtools-extension
[devtools-component]: https://github.com/gaearon/redux-devtools
[redux-logger]: https://github.com/evgenyrodionov/redux-logger
[why-did-u-update]: https://github.com/garbles/why-did-you-update
[hot-loader]: https://github.com/gaearon/react-hot-loader
[react-optimize]: https://github.com/thejameskyle/babel-react-optimize
[history]: https://github.com/ReactTraining/history
[proptypes]: https://facebook.github.io/react/docs/reusable-components-zh-CN.html#prop-验证
