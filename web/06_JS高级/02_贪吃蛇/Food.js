(function () {
  //（1）创建element数组：用来保存每个小方块食物的，方面后面清除
  var elements = [];

  //（2）食物构造函数 （特征变属性）
  function Food(x,y,width,height,color) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 20;
    this.height = height || 20;
    this.color = color || "pink";
  }

  //（3）原型初始化方法：在页面上显示这个食物 （行为变方法）
  Food.prototype.init = function(map){
    // 先删除食物，保证只有一个食物
      remove();
    // 创建div，加入map中
      var div = document.createElement("div");
      map.appendChild(div);
    // 设置div样式
        // 宽高|背景|脱离文档流
      div.style.width = this.width + "px";
      div.style.height = this.height + "px";
      div.style.backgroundColor = this.color;
      div.style.position = "absolute";
        // 随机横纵坐标 | 并赋值
      this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
      this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
      div.style.left = this.x + "px";
      div.style.top = this.y + "px";
    // 把div加入element数组
      elements.push(div);
  };

  //（4）私有函数：删除食物
  function remove(){
    //遍历循环elements数组
    for(var i=0; i<elements.length; i++){
      ele = elements[i];
      // 	（1）找到子元素的父元素，然后删除这个子元素
      ele.parentNode.removeChild(ele);
      // 	（2）再次把elements中的这个子元素也要删除
      elements.splice(i,1);
    }
  }
  //（5）把Food暴露给window：外部可以使用
  window.Food = Food;
}());

//测试代码
// var fd = new Food();
// fd.init(document.querySelector(".map"));