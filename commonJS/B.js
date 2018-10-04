
//  if you want your module to be of a specific object type, use module.exports;
//  if you want your module to be a typical module instance, use exports.


module.exports.say = () => {}
exports.age = 18

console.log(exports, module.exports) // {age:18, say: [Function]},  {age:18, say: [Function]}
