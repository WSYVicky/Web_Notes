<template>
    <div>
        <button @click = 'callDaddy'>1.打电话给父组件</button>
    </div>
</template>

<script>
  import connect from '../connector.js'
  export default {
    name: "sub",
    methods:{
      callDaddy(){
        //发射信号
        connect.$emit('phone','马上来');
      }
    }
  }
</script>

<style scoped>

</style>