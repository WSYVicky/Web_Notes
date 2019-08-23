const fs = require ('fs');
const path = require ('path');

//获取当前与没有传入目录路径
var target = path.join(__dirname, process.argv[2] || './');

fs.readdir(target,(err,files) => {
    files.forEach(file =>{
        console.log(path.join(target,file));
    });
})