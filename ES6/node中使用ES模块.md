# node中使用ES模块

* Node.js EP（增强提议）
*

## 为什么 Node.js 需要 ES 模块？

当 Node.js 开始出现时，那时并没有 ES 模块的提议。于是，Node.js 决定使用 CommonJS 模块。当 CommonJS 这个组织不再活跃，Node.js 和 npm 融入了规范中，一起创造了一个很大的 JavaScript 生态。Node / npm JavaScript 模块生态已经扩散到服务器端与客户端，也发展地非常迅速。

但在一个大环境中，我们该如何处理 ***标准的 ES 模块与 CommonJS 风格的模块的互操作性*** 呢？自 ES 模块规范化进程开始以来，这个问题一值都在激烈地争论中。

Browserify 和 webpack 减少了浏览器端与服务端的差距，使 JavaScript 开发变得容易，也有所统一。如果失去了可互操作性，我们便增加了现有生态与新的标准的不同。如果前端开发人员选择 ES 模块作为他们的默认选择，而服务端工程师则继续使用 Node 版的 CommonJS 的话，它们之前的差距只会越来越大。

## 插曲：前后端统一模块加载方式的一些问题

* ES6 模块应该是通用的，同一个模块不用修改，就可以用在浏览器环境和服务器环境。
* Node 规定 ES6 模块之中不能使用 CommonJS 模块的特有的一些内部变量。
  * 顶层 this 变量（commonJS中指向模块，ES中指向undefined）
  * arguments
  * require
  * module
  * exports
  * `__filename`
  * `__dirname`
* 为了与浏览器的import加载规则相同，Node 的.mjs文件支持 URL 路径。
* 目前，Node 的import命令只支持加载本地模块（file:协议），不支持加载远程模块。

## Node中CommonJS和ES模块互操作的方案

### Node.js EP

Bradley Farias （亦名 Bradley Meck）已经为 CommonJS 和 ES 模块之间的`互操作性`提交了一个提议。目前处于 DRAFT 状态。

* ES模块路线是通过文件扩展名来侦测，`.mjs`（可选的 .es、.jsm 由于各种原因被排除了）
* 安装 Node v8.5.0 或以上版本，要用--experimental-modules参数才能打开该功能

```js
node --experimental-modules xxx.mjs
```

> 由于是试验性质，在node中使用时会给出一个 warning

![](https://ws1.sinaimg.cn/large/006tNbRwly1fvyc4q2iawj316m02sjsx.jpg)

CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用`import()函数`。ES6模块的所有输出接口，会成为输入对象的属性。

```js
// A.mjs
export default function sayName() {
  console.log('my Name is Tom')
}

// index.js
async function ES6 () {
  // import 是异步加载
  const sayName = await import('./A.mjs')
  console.log(sayName)
}

// 执行命令 --experimental-modules index.js
// 输出 { sayName: [Function: sayName] }
```

> ES6中加载 commonJS 模块请查看示例



## 参考文档

* [ES 模块与 Node.js：艰难的选择](https://www.zcfy.cc/article/es-modules-and-node-js-hard-choices-477.html)
* [module加载的实现](http://es6.ruanyifeng.com/#docs/module-loader#Node-加载  experimental)
