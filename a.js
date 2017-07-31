var path = require('path');

console.log(__dirname+'/src');                  //C:\Users\Administrator\Desktop\c-ui/src

console.log(path.resolve(__dirname,'/src'))     //\src

// 以下三个同个答案
//C:\Users\Administrator\Desktop\c-ui\src
console.log(path.resolve(__dirname,'./src'))
console.log(path.join(__dirname,'./src'))
console.log(path.join(__dirname,'/src'))
