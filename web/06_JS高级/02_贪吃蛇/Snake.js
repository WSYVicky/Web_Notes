(function () {
  //（1）创建elements：存放小蛇身体的每个部分
    var elements = [];

  // （2）小蛇构造函数
  function Snake(width,height,direction){
    // 小蛇每个部分的宽高
    this.width = width || 20;
    this.height = height || 20;
    this.direction = direction || "right";
    // 小蛇身体（01_数组）
    this.body = [
        {x: 3, y: 2, color: "red"},//头
        {x: 2, y: 2, color: "orange"},//身体
        {x: 1, y: 2, color: "orange"}//身体
      ];
  }

  // （3）原型初始化方法
   Snake.prototype.init = function(map){
    // 先删除小蛇，保证只有一条蛇
      remove();
    // 循环遍历小蛇body数组，创建div
     for (var i=0; i<this.body.length; i++){
       // 数组中每个元素都是一个对象
        var obj = this.body[i];
      // 创建div，加入到map中
        var div = document.createElement("div");
        map.appendChild(div);
      // 设置div样式
      //定位|宽高|颜色
        div.style.position = "absolute";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = obj.color;
      // 横纵坐标
        div.style.left = obj.x * this.width + "px";
        div.style.top = obj.y * this.height + "px";
      // 把div加入到element数组
       elements.push(div);
     }
   };

  // （4）原型方法：小蛇动起来
    Snake.prototype.move = function(food,map){
      // 	（1）改变小蛇的身体的坐标
      var i = this.body.length -1;
      for(; i>0; i--){
        // 获得body身体部分的长度,往后挪一位
        this.body[i].x = this.body[i-1].x;
        this.body[i].y = this.body[i-1].y;
      }

      // （2）改变小蛇的头的坐标

        switch (this.direction){
          case "right":
            this.body[0].x += 1;
            break;
          case "left":
            this.body[0].x -= 1;
            break;
          case "top":
            this.body[0].y -= 1;
            break;
          case "bottom":
            this.body[0].y += 1;
            break;
        }
      // （3）判断有没有吃到食物
        // 获得小蛇的头横纵坐标
      var headX = this.body[0].x * this.width;
      var headY = this.body[0].y * this.height;
        // 判断小蛇头的横纵坐标和食物的坐标是否相同
      if(headX == food.x && headY == food.y){
        // 	获取小蛇的最后尾巴
        var last = this.body[this.body.length-1];
        // 	把最后的蛇尾复制一个,重新加入小蛇的body中
        this.body.push({
          x:last.x,
          y:last.y,
          color:last.color
        })
        // 食物删除，重新初始化食物
        food.init(map);
      }
    };

  //（5）私有函数：删除小蛇
  function remove() {
    // 遍历element数组，从后向前删除
    var i = elements.length - 1;
    for (; i>=0; i--){
      var ele = elements[i];
      // 找到子元素的父元素，然后删除这个子元素
      ele.parentNode.removeChild(ele);
      // 再次把elements中的这个子元素也要删除
      elements.splice(i,1);
    }
  }

  // (6)暴露给window，让外部访问到
  window.Snake = Snake;
}());

//测试代码
//  var fd = new Food();
//  fd.init(document.querySelector(".map"));
//  var snake = new Snake();
//  snake.init(document.querySelector(".map"));//先在地图上看到小蛇
//  setInterval(function () {
//    snake.move(fd, document.querySelector(".map"));
//    snake.init(document.querySelector(".map"));
//  }, 150);