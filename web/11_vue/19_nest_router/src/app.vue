<template>
    <div>
        <header-vue></header-vue>
        <!--用来显示music-->
        <router-view></router-view>
        <footer-vue></footer-vue>
    </div>
</template>

<script>
  export default {
    name: "app"
  }
</script>

<style scoped>

</style>