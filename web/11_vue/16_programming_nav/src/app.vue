<template>
    <div>
        <div class="h">头部
            <button @click="goMusic">音乐</button>
        </div>
        <router-view class="b"></router-view>
        <div class="f">底部</div>
    </div>
</template>

<script>
  export default {
    name: "app",
    methods:{
      goMusic(){
        this.$router.push('/music');
      }
    }
  }
</script>

<style scoped>
.h{
    height: 100px;
    background-color: pink;
}
.b{
    height: 100px;
    background-color: hotpink;
}
.f{
    height: 100px;
    background-color: plum;
}
</style>