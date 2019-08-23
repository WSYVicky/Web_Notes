// 每次访问 / 的时候，新增一条记录
var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get("/",function(req,res){
    var url = 'mongodb://localhost:27017/itcast';
    // 连接数据库
    MongoClient.connect(url,function(err,database){
        if(err){
            console.log("数据库连接失败");
            return;
        }
        console.log("数据库连接成功");
        const db = database.db('itcast');
        db.collection('students').insertOne({
            "name":"哈哈",
            "age":parseInt(Math.random()*100 + 10)
        },function(err,result){
            if(err){
                console.log("插入失败");
            }
            res.send(result);
            db.close();
        });
    });
});

app.listen(3000);