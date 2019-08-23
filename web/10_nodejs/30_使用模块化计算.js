'use strict';

//（1）接受参数
const args = process.argv.slice(2);

//（2）分析参数
if (args.length !== 3){
    console.log('参数不合法');
    throw new Error('参数不合法');
}

let P1 = args[0];
let OP = args[1];
let P2 = args[2];

//（3）进行运算
const calc = require ('./modules/calculator.js') ;

let result;
switch(OP){
    case '+':
        result = calc.add(P1,P2);
        break;
    case '-':
        result = calc.subtract(P1,P2);
        break;
    case '*':
    case 'x':
        result = calc.multiply(P1,P2);
        break;
    case '/':
    case '÷':
        result = calc.divide(P1,P2);
        break;
    default:
        throw new Error('不被支持的操作符' + OP);

}
console.log(result);