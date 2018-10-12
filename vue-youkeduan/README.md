## 代码规范

>html规范
- 采用最优的结构布局
- 由于采用单文件组件形式，组件特有的样式写在组件内，公用的写到公用文件中

> css规范
- 命名采用bem规范（格式block-name__element-name--modify-name）
- 使用命名空间：
```
.l-：页面布局使用（例如：.l-block-name__element-name--modify-name）
.c-：组件使用，复杂些的对象，可以由对象和组件构成（例如：.c-block-name__element-name--modify-name）
.o-：对象使用，可以复用的最小单位,不可以包含对象和组件（例如：.o-block-name__element-name--modify-name）
.is-：状态使用（例如：.is-block-name__element-nam--modify-name）
.t1-/s1-：排版大小使用（例如：.t1-block-name__element-name--modify-name）
.u-：工具使用，拥有最高权重（例如：.u-block-name__element-name--modify-name）
.js-：用于和js交互使用，目前不使用（例如：.js-block-name__element-name--modify-name）

```
参考地址：https://www.w3cplus.com/css/css-architecture-2.html

>js规范
- 命名规范
```
1.常量定义使用 const
2.全局变量定义使用 var
3.局部变量定义使用 let
4.变量命名采用驼峰法，例如：let testExample = 1
5.变量名字不可以使用无意义、简写、拼音命名
6.缩进采用4个空格，ide已经配置好了（tab会转化为4个空格）
````

>git规范
- 开发前先拉取最新的版本
- 版本提交时要注明本次修改的主要内容，简要概括（可以做完一个功能提交一次）
- 关于推送问题，每天下班的时候推送（一天一次）

##### 特别说明：每天添加代码，不要在主分支开发，建立分支，开发完毕后合并到主分支

#### npm使用帮助
````
添加nrm 来管理npm的镜像地址 npm i -g nrm （建议全局安装的用npm，局部安装的用yarn,下面有使用说明）

清理缓存
npm cache clean --force

安装软件(更新是一样的操作，也可指定版本)
npm i 软件名称 可选参数 -S 生产环境 -D 开发环境 自动加入package文件

卸载软件
npm uninstall 软件名称

设置代理
npm config set proxy http://127.0.0.1:22222
删除代理
npm config delete proxy

使用nrm更换源
nrm ls 可以更换的源
nrm use 源名称

无法使用淘宝镜像安装的软件
npm i -D chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
npm i -D node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
````

#### yarn使用帮助
````
1. 开始一个新工程
yarn init

2.添加一个依赖
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

3.更新一个依赖
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

4.移除一个依赖
yarn remove [package]

5.安装package.json中所有的依赖项
yarn 或者 yarn install

参考文档：https://yarnpkg.com/en/docs/cli/
