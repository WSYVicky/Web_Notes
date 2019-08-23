<template>
    <div>
        {{data1}}
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
    created(){
      //console.log(this.$http);

      // get请求
      this.$axios.get('/api/index.json',{
        // 单个请求的设置
        headers:{
          accept:'get'
        }
      })
        .then(res=>{
          this.data1 = res.data.data.swiperList;
        },err=>{
          console.log(err)
        })

    }
  }
</script>

<style scoped>

</style>