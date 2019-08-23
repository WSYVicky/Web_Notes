<template>
    <div>
        头{{textone}}
        <button @click="show">从js中获取父组件传递的参数</button>
    </div>
</template>

<script>
  export default {
    name: "header",
    props:['textone'],
    methods:{
      show(){
        alert(this.textone);
      }
    }
  }
</script>

<style scoped>
div{
    background-color: pink;
}
</style>