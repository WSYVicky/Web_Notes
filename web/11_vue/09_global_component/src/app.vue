<template>
    <div>
        <header-vue textone="大"></header-vue>
        <body-vue :texttwo="text2"></body-vue>
        <footer-vue></footer-vue>
    </div>
</template>

<script>
export default {
    data(){
      return{
        text2:'loveU'
      }
    }
}
</script>

<style scoped>

</style>