// 两种方法的比较

exports.getName = function() {
  console.log('My Name is: KKK')
}
exports.sayName = function(){
  console.log('myName')
}

// module.exports = {
//   getName: function() {
//     console.log('My Name is： modExport')
//   },
//   sayName: function() {
//     console.log('MyName')
//   }
// }

console.log(exports, module.exports)
