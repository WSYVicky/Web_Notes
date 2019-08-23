<template>
    <div>
        <button @click="changeValue">改变值</button>
    </div>
</template>

<script>
  export default {
    name: "app",
    data(){
      return {
        text:'',
        persons:[{
          name:'jack'
        },{
          name:'rose'
        }]
      }
    },
    methods:{
      changeValue(){
        //this.text = 'abc';
        this.persons[0].name = 'mick';
      }
    },
    watch:{
      //（1）普通监视
      text:function (newV,oldV) {
        console.log('普通监视');
      },
      //（2）深度监视
      persons:{
        handler:function (newV,oldV) {
          console.log('深度监视')
        },
        deep:true
      }
    }
  }

</script>

<style scoped>

</style>