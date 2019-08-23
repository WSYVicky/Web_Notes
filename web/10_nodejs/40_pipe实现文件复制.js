const fs = require('fs');
const path = require('path');

// 1. 创建文件的读取流，并没有读出正式的数据，开始了读取文件的任务（）
var render = fs.createReadStream(path.join(__dirname,'./data/c.txt'));

// 2. 创建文件的写入流
var writer = fs.createWriteStream(path.join(__dirname,'./data/e.txt'))

render.pipe(writer);