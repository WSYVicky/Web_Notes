<template>
    <div>
        输入框：<input type="text" v-model="text"><br/>
        反转字符串：{{text | myFilter}}

        <!--测试组件范围-->
        <sub-vue></sub-vue>
    </div>
</template>

<script>
    import sub from './sub.vue'
  export default {
    name: "app",
    components:{
      subVue:sub
    },
    data(){
      return{
        text:''
      }
    },
    //组件过滤器
    filters:{
      myFilter:function (value) {
        return value.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>

</style>