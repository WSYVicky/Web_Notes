<template>
    <div>
        <!-- （1）原生操作DOM -->
        <div ref="myDiv"></div>

        <!-- （2）组件操作DOM -->
        <sub-vue ref="mySub"></sub-vue>
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
      }
    },
    //数据已经加载完成还不能操作DOM
    created(){
      console.log('created:'+this.$refs.myDiv)
    },
    mounted(){
      //(1)原生DOM
      // console.log('mounted:'+this.$refs.myDiv);
      // this.$refs.myDiv.innerHTML = 'haha';

      //(2)组件DOM
      // console.log('mounted:'+this.$refs.mySub);
      // console.log('mounted:'+this.$refs.mySub.$el);
      // this.$refs.mySub.$el.innerHTML = `<button>按钮</button>`;
    }

  }
</script>

<style scoped>

</style>