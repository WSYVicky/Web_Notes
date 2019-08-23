// 动 不断的切换显示的图形（字符画）
// 擦除重绘

// 每个成员就是帧
var frames = [];

frames[frames.length] = `
╭~~~╮
(o^.^o)
`;
frames[frames.length] = `
╭~~~╮
(o~.~o)
`;
frames[frames.length] = `
╭~~~╮
(o@.@o)
`;
frames[frames.length] = `
╭ ﹌╮
(o'.'o)
`;


var fps = 10;
// 当前显示哪一帧
var current = 0;
var render = () => {
  // 清空控制台
  // 方法一
  // var height = process.stdout.getWindowSize()[1];
  // for (var i = 0; i < height; i++) {
  //   process.stdout.write('\r\n');
  // }
  // 方法二
  process.stdout.write('\033[2J');
  process.stdout.write('\033[0f');

  // 如果放完了最后一帧，重新置位
  if (current === frames.length) { current = 0; }
  process.stdout.write(frames[current++]);
};

setInterval(render, 1000 / fps);


// var size = process.stdout.getWindowSize();
// console.log(size);
