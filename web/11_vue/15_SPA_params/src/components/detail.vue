<template>
    <div>
        详情
    </div>
</template>

<script>
  export default {
    name: "detail",
    created(){
      //获取路由参数
      //vue-router中挂载两个对象的属性
      //$route（信息数据）  $router (功能函数)
      //3:去了干嘛
      console.log(this.$route.query.id);
      console.log(this.$route.params.id);
    }
  }
</script>

<style scoped>

</style>