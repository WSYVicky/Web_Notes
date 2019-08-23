<template>
    <div>
           我们的第一个vue程序<br/>
           <h3>双向绑定</h3>
           输入：{{text}}<br/>
           输入：<input type="text" v-model="text">
           <h3>数组数据展示</h3>
            <ul>
                <li v-for="person in list">
                    {{person.name}}
                    {{person.sex}}
                </li>
            </ul>
    </div>
<!--     <div>
        只能包含一个根节点 2.x以后
    </div> -->
</template>
<script>
    export default {
        //配置
        //类似$scope.xxx = '初始化'
        //data:function(){}
        data(){
          return{
            text:'大家好',
            list:[{name:"vicky"},{sex:"female"}]
          }
        }
    }
</script>
<style></style>