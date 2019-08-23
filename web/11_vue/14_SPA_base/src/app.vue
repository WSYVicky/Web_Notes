<template>
    <div>
        <div class="h">头部
            <router-link :to="{name:'music'}">音乐</router-link>
            <router-link :to="{name:'movies'}">电影</router-link>
        </div>
        <router-view class="b"></router-view>
        <div class="f">底部</div>
    </div>
</template>

<script>
  export default {
    name: "app"
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