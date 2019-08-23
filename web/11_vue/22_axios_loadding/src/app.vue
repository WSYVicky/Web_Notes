<template>
    <div>
        <button @click="send">发送请求</button>
    </div>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        data1:[]
      }
    },
    methods:{
      send(){
        //拦截器对每一次请求都有效
        this.$axios.get('/api/index.json')
          .then(res=>{
            console.log(res);
          },err=>{
            console.log(err);
          })
      }
    }
  }
</script>

<style scoped>

</style>