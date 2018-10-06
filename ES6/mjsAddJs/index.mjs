// 执行命令： node --experimental-modules mjsAddJs/index.js

// 3种写法获取 commonJS 导出的模块，它们的结果是一致的
import commonJS from '../module/commonJS.js'
import { default as commonJS2 } from '../module/commonJS.js'
import * as commonJS3 from '../module/commonJS.js'

console.log(commonJS)
console.log(commonJS2)
console.log(commonJS3.default)
