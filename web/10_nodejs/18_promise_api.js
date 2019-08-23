var fs = require('fs');

var p1 = new Promise(function (resolve,reject) {
  fs.readFile('./data/a.txt','utf8',function (err,data) {
    if(err){
      reject(err)
    } else {
      resolve(data)
    }
  })
})

var p2 = new Promise(function (resolve,reject) {
  fs.readFile('./data/b.txt','utf8',function (err,data) {
    if(err){
      reject(err)
    } else {
      resolve(data)
    }
  })
})

var p3 = new Promise(function (resolve,reject) {
  fs.readFile('./data/c.txt','utf8',function (err,data) {
    if(err){
      reject(err)
    } else {
      resolve(data)
    }
  })
})

p1.then(function (data1) {
  console.log(data1)
  return p2;
},function (err) {
  console.log('文件读取失败',err)
}).then(function (data2) {
  console.log(data2)
  return p3
},function (err) {
  console.log('文件读取失败',err)
}).then(function (data3) {
  console.log(data3)
},function (err) {
  console.log('文件读取失败',err)
})