// 执行命令运行本文件（node要求v8.5.0+）： node --experimental-modules jsAddMjs/index.js

// 示例：commonJS 中加载 ES 模块

// 直接加载会报错，需要使用 import() 函数
// import sayName from '../module/nodeEs.js'

async function ES6 () {
  // import 是异步加载
  const sayName = await import('../module/nodeES.mjs')
  console.log(sayName)  // sayName() {}
}
ES6()

// 混合使用
let commonJS = require('../module/commonJS.js')
console.log(commonJS.name, commonJS.getName)
