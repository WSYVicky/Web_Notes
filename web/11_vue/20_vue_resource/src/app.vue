<template>
    <div>
        {{data}}
    </div>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        data:[]
      }
    },
    created(){
      //console.log(this.$http);

      //（1）get请求
      // this.$http.get('/api/index.json')
      //   .then(res=>{
      //     this.data = res.data.data.swiperList;
      //   },err=>{
      //     console.log(err)
      //   })

      //（2）post请求
      this.$http.post('/api/text.json',{
        content:'haha'
      })
        .then(res=>{
          this.data = res.data;
        },err=>{
          console.log(err);
        });
    }
  }
</script>

<style scoped>

</style>