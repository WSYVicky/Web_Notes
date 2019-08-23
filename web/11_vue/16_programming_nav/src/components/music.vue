<template>
    <div>
        music
        <button @click="goMovie">电影</button>
        <button @click="goNext">下一页</button>
        <button @click="goBack">回到上一级</button>
    </div>
</template>

<script>
  export default {
    name: "music",
    methods:{
      goMovie(){
        this.$router.push({name:'movies'});
      },
      goBack(){
        this.$router.go(-1);
      },
      goNext(){
        this.$router.go(1);
      }
    }
  }
</script>

<style scoped>

</style>