// 创建文件夹

const fs = require('fs');
const path = require('path');

const mkdirs = require('./modules/mkdirs');

// 版本一 调用
//mkdirs('demo2/demo3');

// 版本二 调用
mkdirs(path.join(__dirname, 'demo1/demo2'), (err) => {
  console.log(err);
});


// mkdirs(path.join(__dirname, 'demo2/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3/demo3'), (err) => {
//   console.log(err);
// });

//  Node 4.x  NPM 2.x 递归依赖

// project/node_modules/fs-ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/node_modules/ext/



// 3.x 平行依赖

// project/node_modules/fs-ext/
// project/node_modules/ext/
// project/node_modules/123/
// project/node_modules/fs1/
// project/node_modules/fs2/


