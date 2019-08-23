const path = require('path');
const temp = path.join(__dirname,'./data/a.txt');

// 1 path.basename(p[, ext]) : 获取文件名
// 1.1 输出文件名（带扩展名）
console.log(path.basename(temp));
// 1.2 输出文件名（不带扩展名）
console.log(path.basename(temp,'txt'));

// 2 path.delimiter : 获取不同操作系统中默认的路径分割符(windows中是";"，linux中是":")
console.log(path.delimiter);

// 3 获取环境变量
console.log(process.env.PATH.split(path.delimiter));

// 4 path.dirname(p) : 获取目录名称
console.log(path.dirname(temp));

// 5 path.extname(p) : 获取路径中的扩展名，包含.
console.log(path.extname(temp));

// 6 path.parse(pathString) : 将一个路径字符串转换为一个对象（包含文件目录，文件名，扩展名）
var obj = path.parse(temp);
console.log(obj);

// 7 path.format(obj) : 将一个路径对象转为字符串
console.log(path.format(obj));

// 8 path.isAbsolute(path) : 判断一个路径是否是绝对路径
console.log(path.isAbsolute(temp));

// 9 path.join([path1][,path2][,...]) : 拼凑路径，转为绝对路径
// __dirname代表当前目录

// 10 path.normalize(p) : 常规化一个路径（主要为windows服务）

// 11 path.relative(from , to) : 获取 to 相对于 from 的相对路径
console.log(path.relative(__dirname,'/Users/vicky/Sites/web/10_nodejs/data/a.txt'));

// 12 path.resolve([from ...], to) : 类似于join

// 13 path.sep : 获取当前操作系统中默认用的路径成员分隔符 Windows:\ linus: /
console.log(path.sep);

// 14 path.win32 : 允许在任意操作系统上泗洪Windows的方式操作路径
// 15 path.posix : 允许在任意操作系统上泗洪Linux的方式操作路径