(function(){
// （1）定义 that ：保存游戏Game的实例对象
  var that = null;

// （2）游戏构造函数
  function Game(map){
    this.food = new Food();
    this.snake = new Snake();
    this.map  = map;
    that = this;
  }

// （3）原型初始化方法：可以设置小蛇和食物显示
  Game.prototype.init = function(){
    this.food.init(this.map);
    this.snake.init(this.map);
    this.runSnake(this.food,this.map);
    this.bindKey();
  };

// （4）原型方法：设置小蛇可以自动的跑起来
  Game.prototype.runSnake = function (food, map){
    //定时器自动移动
    var timeId = setInterval(function () {
      // 初始化小蛇
      this.snake.init(map);
      // 移动小蛇
      this.snake.move(food,map);
      // 横、纵坐标的最大值
      var maxX = map.offsetWidth / this.snake.width;
      var maxY = map.offsetHeight / this.snake.height;
      // 小蛇的头坐标
      var headX = this.snake.body[0].x;
      var headY = this.snake.body[0].y;
      // 判断
      if(headX < 0 || headX > maxX){
        clearInterval(timeId);
        alert("游戏结束");
      }
      if(headY < 0 || headY > maxY){
        clearInterval(timeId);
        alert("游戏结束");
      }
    }.bind(that),300);
  };

  // （5）原型方法：设置用户按键，改变小蛇移动的方向
  Game.prototype.bindKey=function () {
    document.addEventListener("keydown",function (e) {
      switch (e.keyCode){
        case 37: this.snake.direction = "left";break;
        case 38:this.snake.direction="top";break;
        case 39:this.snake.direction="right";break;
        case 40:this.snake.direction="bottom";break;
      }
    }.bind(that),false)
  };

  // （6）把Game暴露给window：外部可以使用
  window.Game = Game;
}());