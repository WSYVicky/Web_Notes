<template>
    <div>
        <subVue></subVue>
        <button @click = "listen">2.父组件监听子组件</button>
    </div>
</template>

<script>
  import connect from './connector.js';
  export default {
    name: "app",
    methods:{
      listen(){
        connect.$on('phone',function (msg){
          console.log(msg);
        })
      }
    }
  }
</script>

<style scoped>

</style>