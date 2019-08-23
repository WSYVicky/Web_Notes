var users = {
    'admin':'123',
    'user1':'123',
    'user2':'123'
};

process.stdout.write('请输入用户名：\n');

// 设置标志位
var username = '';

process.stdin.on('data',(input)=>{
    // 去除输入字符串的首尾空白符
    input = input.toString().trim();

    if(!username){
        if(Object.keys(users).indexOf(input) === -1){
            process.stdout.write('用户名不存在'+'\n');
            process.stdout.write('请输入用户名：\n');
            username = '';
        }else{
            process.stdout.write('请输入密码：\n');
            username = input;
        }
    }else{
        // 这里做密码判断
        if(input === users[username]){
            console.log('登录成功');
        }else{
            process.stdout.write('请输入密码：\n');
        }
    }
});