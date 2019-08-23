<template>
    <div>
        单价：<input type="text" name="" v-model="price"> *
        件数：<input type="text" name="" v-model="num"> *
        折扣：<input type="text" name="" v-model="rate"> =
        {{sum.name}}{{sum.price}}
    </div>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        price:0,
        num:0,
        rate:0
      }
    },
    computed:{
      sum(){
        //如果当函数内涉及到的this.相关属性发生改变以后触发，并返回一个值(可以是对象)
        return{
          name:'古龙水',
          price:this.price * this.num * (this.rate/100)
        }
      }
    }
  }

</script>

<style scoped>

</style>