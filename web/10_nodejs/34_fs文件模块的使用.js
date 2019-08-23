const fs = require('fs');
const path = require('path');

// JSON.stringify 序列化
// JSON.parse 反序列化

// (1)异步写入
fs.writeFile(path.join(__dirname,'./data/a.txt'),JSON.stringify({ id:10 }),(err)=>{
    if(err){
        // 读文件是不存在报错
        // 意外错误
        // 文件权限问题
        console.log('error');
    } else{
        console.log('success');
    }
})

// （2）同步写入 fs.writeFileSync(file,data,[,option])

// （3）流方式写入 fs.createWriteStream(path[,option])
var streamWriter = fs.createWriteStream(path.join(__dirname,'./data/a.txt'));
setInterval(()=>{
    streamWriter.write('hello',()=>{
        console.log('+1');
    });
},1000);

// (4) 异步追加 fs.appendFile(file,data[,options],callback(err))
fs.appendFile(path.join(__dirname,'./data/a.txt'),JSON.stringify({ id:10 }),(err)=>{
    if(err){
        // 读文件是不存在报错
        // 意外错误
        // 文件权限问题
        console.log('error');
    } else{
        console.log('success');
    }
})

// (5) 同步追加 fs.appendFileSync(file,data[,options])

//（6）文件移动或重命名 fs.rename ( oldPath, newPath )
