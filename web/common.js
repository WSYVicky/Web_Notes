/**
 * 获取指定标签对象
 * @param id 标签的id属性值
 * @returns {Element}根据id属性值返回指定标签对象
 */
function my$(id) {
  return document.getElementById(id);
}

/**
 * 设置元素的文本内容
 * @param element 任意元素
 * @param text 要设置的内容
 */
function setInnerText(element,text) {
  if (typeof element.textContent == "undefined"){
    element.innerText = text;
  }else{
    element.textContent = text;
  }
}

/**
 * 获取元素的文本内容
 * @param element 任意元素
 * @returns {*} 任意元素中的文本内容
 */
function getInnerText(element) {
  if (typeof element.textContent == "undefined"){
    return element.innerText;
  }else{
    return element.textContent;
  }
}

/**
 * 为任意元素绑定任意的事件
 * @param element 任意元素
 * @param type 事件类型
 * @param fn 函数名字
 */
function addEventListener(element,type,fn) {
  //判断浏览器是否支持这个方法
  if(element.addEventListener){
    element.addEventListener(type,fn,false);
  }else if(element.attachEvent){
    element.attachEvent("on"+type,fn);
  }else{
    element["on"+type]=fn;
  }
}

/**
 * 为任意元素解绑任意的事件
 * @param element 任意元素
 * @param type 事件类型
 * @param fn 函数名字
 */
function removeEventListener(element,type,fn) {
  if(element.removeEventListener){
    element.removeEventListener(type,fn,false);
  }else if(element.detachEvent){
    element.detachEvent("on"+type,fn);
  }else{
    element["on"+type]=null;
  }
}

/**
 * 获取任意一个元素的任意一个属性的当前的值
 * @param element 任意元素
 * @param attr 任意属性
 */
function getStyle(element,attr) {
  return window.getComputedStyle? window.getComputedStyle(element,null)[attr]:element.currentStyle[attr]||0;
}