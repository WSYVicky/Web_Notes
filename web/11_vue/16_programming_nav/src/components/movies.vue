<template>
    <div>
        movies
        <button @click="goB">向上一页</button>
    </div>
</template>

<script>
  export default {
    name: "movies",
    methods:{
      goB(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>