 <center>
     <h1>唐麟</h1>
     <div>
         <span>
             <img src="assets/phone-solid.svg" width="18px">&nbsp;
             13657053257&nbsp;
         </span>
         <span>
             <img src="assets/envelope-solid.svg" width="18px">&nbsp;
             2196184435@qq.com&nbsp;
         </span>
         <span>
             <img src="assets/github-brands.svg" width="18px">&nbsp;
             <a href="https://github.com/tanglintang">tanglintang</a>、<a href="https://github.com/sth-for-nothing">sth-for-nothing</a>&nbsp;
         </span>
         <span>
             <img src="assets/rss-solid.svg" width="18px">&nbsp;
             <a href="https://tanglintang.github.io/">My Blog</a>&nbsp;
         </span>
     </div>
 </center>

 ## <img src="assets/info-circle-solid.svg" width="30px"> 个人信息 

 - 男，1997 年出生
 - 求职意向：前端开发
 - 学士，东华理工大学软件工程专业，2019.7 毕业

## <img src="assets/tools-solid.svg" width="30px"> 技能介绍

- 开发工具：*VSCode、Sublime*
- 熟悉 *HTML、JavaScript、CSS*，以及 *HTML5、ES6、CSS3* 特性，熟悉 *JavaScript* 原理（继承、基本类型、原型、DOM、BOM 等）
- 前端框架：熟悉 *React* 组件开发并配合 *React-Router、Redux* 状态管理使用、了解并使用过 *Vue、JQuery、Lodash、Underscore、Moment* 等 js 库
- 后端框架、数据库：熟悉基于 *NodeJS* 的 *Koa* 框架使用、*MySQL* 数据库、*Sequelize* ORM 框架
- UI 框架：了解并使用过 *ElementUI、Ant* *Design、BootStrap* 等
- 版本管理、包管理工具：*Git、npm(cnpm)、yarn*
- 打包工具：了解 *Webpack* 配置
- 微信小程序

## <img src="assets/project-diagram-solid.svg" width="30px"> 项目经历

- ### 外卖 Mobile H5 SPA

  **项目介绍：**
  
    >  独立完成的移动端单页应用，本地开发。实现了店铺、商品展示，点餐下单，搜索，地理位置选择等功能。部分功能使用 ele 开放的接口（包括地址，搜索，店铺商品等），由于未获得实际店铺点餐接口无法使用真实点餐功能，由本地数据库提供数据存储，用户验证。

  **技术介绍：**
  - 使用 *React、ReactRouter、Redux* 搭建前端页面以及配置路由、管理状态
  - 使用 *Less* 预编译 *css* 库
  - 使用 *postcss-px2rem* 自动将 *px* 转为 *rem* 单位，适用于移动端开发
  - 骨架屏填充，提升用户体验
  - *HTML5 scrollIntoView* 让锚点实现滚动页面效果
  - *Axios* 库连接后端进行异步 *HTTP* 请求
  - 前后端分离，后端向前端提供 *Restful API*
  - 后端采用 *MVC* 设计模式，利用 *Koa* 搭建后端，以及后端路由
  - 使用 *MySQL* 数据库存储数据
  - *Sequelize ORM* 框架将数据库表映射为 *JavaScript* 对象，使用其中定义好的 *models* 作为 *Model* 层，对数据逻辑处理

  项目源代码地址：[https://github.com/sth-for-nothing/react-koa-mysql-ele](https://github.com/sth-for-nothing/react-koa-mysql-ele)

  Github Page 静态页面部署：[https://github.com/sth-for-nothing/react-ele-online-static](https://github.com/sth-for-nothing/react-ele-online-static) <内容为静态数据，githubPage 无法跨域获取数据>

- ### 个人博客

  **项目介绍：**
  
    >  PC 个人博客。提供写文章、发布以及预览文章，展示博客列表，设置或展示标签等功能。

  **技术介绍：** 
  - 使用 *React全家桶*和 *Antd* UI框架搭建前端页面
  - *StyledComponents* 将样式组件化
  - *Koa、KoaRouter、Sequelize* 搭建后端
  - *MySQL* 数据库对发布的博客文章进行存储
  - *Redis* 数据库对 *token* 验证所生成的 *jwt* 进行存储
  - *koaBody* 对前端发送的数据进行解析，开启文件上传

  GitHub 托管地址：[https://github.com/tanglintang/myBlog](https://github.com/tanglintang/myBlog)

- ### 听书 FM

  *技术栈：Vue、Vue Router、Vuex、stylus、axios*

  项目地址：[https://github.com/tanglintang/vue-m.qingting.fm](https://github.com/tanglintang/vue-m.qingting.fm)

- ### bilibili小程序

  *技术栈：微信小程序、mpvue、flyio、stylus*

  项目地址：[https://github.com/tanglintang/mpvue-bilibili](https://github.com/tanglintang/mpvue-bilibili)