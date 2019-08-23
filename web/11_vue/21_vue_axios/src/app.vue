<template>
    <div>
        {{data1}}
        <hr/>
        {{data2}}
    </div>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        data1:[],
        data2:[]
      }
    },
    created(){
      //console.log(this.$http);

      //（1）get请求
      this.$axios.get('/api/index.json',{
        params:{
          id:'0001'
        }
      })
        .then(res=>{
          this.data1 = res.data.data.swiperList;
        },err=>{
          console.log(err)
        })

      //（2）post请求
      this.$axios.post('/api/text.json',{
        content:'haha'
      })
        .then(res=>{
          this.data2 = res.data;
        },err=>{
          console.log(err);
        });

      //（3）合并请求
      this.$axios.all([
        this.$axios.get('/api/index.json'),
        this.$axios.post('/api/text.json','content=123')
      ])
        //分发响应
        .then(this.$axios.spread(getMsg))
        .catch(err=>{
          console.log(err);
        })
      
      function getMsg(res1,res2){
        console.log('成功啦');
        console.log(res1);
        console.log(res2);
      }
    }
  }
</script>

<style scoped>

</style>