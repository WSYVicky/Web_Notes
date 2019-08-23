// process：用于获取当前的 Node 进程信息，一般用于获取环境变量之类的信息

// 1 process.argv:除了node 02.js 后面的参数
// var argvs = process.argv.slice(2);

// switch(argvs[0]){
//   case 'init':
//     console.log('你需要INIT');
//     break;
//   case 'install':
//     var installPackageName = argvs[1];
//     console.log('你在安装' + installPackageName);
//     break;
//   case 'uninstall':
//     console.log('uninstall');
//     break;
// }

// 2 process.stdout:操作控制台
// 2.1 写法一
process.stdout.write('hello world');

var msg = 'hello';
var a = '哈哈';
// 2.2 函数里
// var log = function (msg) {
//   process.stdout.write(msg+'\n');
// };

// 2.3 es2015(es6)的函数写法
// var log2 = (message) => {
//   process.stdout.write(message+'\n');
// };

// 2.4 模版字符串写法
// process.stdout.write(`
//     ${msg} world ${a}
// `);