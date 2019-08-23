const fs = require('fs');
const path = require('path');

// 1 同步
console.time('sync');
try {
    var data = fs.readFileSync(path.join(__dirname,'./data/a.txt'),'utf8');
} catch(error) {
    throw error;
}
console.timeEnd('sync');

// 2 异步
console.time('async');
fs.readFile(path.join(__dirname,'./data/a.txt'),'utf8',(error,data)=>{
    if(error) throw error;
});
console.timeEnd('async');