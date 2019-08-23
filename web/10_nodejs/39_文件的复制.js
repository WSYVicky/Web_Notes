// 版本一
// 缺点：（1）大文件拷贝时，内存接受不了 （2）没有进度的概念
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'./data/b.txt'),(err,data)=>{
    if(err){
        throw err;
    }
    fs.writeFile(path.join(__dirname,'./data/d.txt'),data,(err)=>{
        if(err) throw err;
        console.log('拷贝完成');
    });
});

// 版本二 ： 文件流的方式复制
const fs = require('fs');
const path = require('path');

// 1. 创建文件的读取流，并没有读出正式的数据，开始了读取文件的任务（）
var reader = fs.createReadStream(path.join(__dirname,'./data/c.txt'));

// 2. 创建文件的写入流
var writer = fs.createWriteStream(path.join(__dirname,'./data/e.txt'))

fs.stat(path.join(__dirname,'./data/c.txt'),(err,stats)=>{
    if(stats){
        var readTotal = 0;
        reader.on('data',(chunk)=>{
            // chunk是一个buffer(字节数组)
            writer.write(chunk,(err)=>{
            console.log('已读：'+((readTotal+=chunk.length)/stats.size*100)+'%');
            });
        });

        reader.on('end',()=>{
            // 没有了，读完了
        })
    }
});