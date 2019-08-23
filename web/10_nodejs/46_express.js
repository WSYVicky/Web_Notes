var express = require("express");
var app = express();

// 1. 路由能力
app.get('/haha',function(req,res){
    res.end("haha");
});

// 2. 正则匹配能力
app.get(/^\/student\/([\d]{10})$/,function(req,res){
    res.send("学生信息，学号：" + req.params[0]);
});

// 3. express自带的参数匹配能力
app.get("/teacher/:gonghao",function(req,res){
    res.send("老师信息，工号：" + req.params.gonghao);
});

// 4. 公开静态资源能力
app.use(express.static("./data"));

// 5. 模版引擎
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("haha",{
        "news" : ["我是小新闻啊","我也是啊","哈哈哈"]
    });
});

app.listen(3000);