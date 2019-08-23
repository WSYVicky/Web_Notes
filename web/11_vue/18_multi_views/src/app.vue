<template>
    <div>
        <router-view name="header"></router-view>
        <router-view name="default"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
  export default {
    name: "app"
  }
</script>

<style scoped>

</style>