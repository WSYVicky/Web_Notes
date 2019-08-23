<template>
    <div>
        <header-vue></header-vue>
        <body-vue></body-vue>
        <footer-vue></footer-vue>
    </div>
</template>

<script>
    import headerVue from './components/header.vue';
    import bodyVue from './components/body.vue';
    import footerVue from './components/footer.vue';
export default {
    components:{
      headerVue:headerVue,
      bodyVue:bodyVue,
      footerVue
    }
}
</script>

<style scoped>

</style>