<template>
    <div>
        <!-- (1) 操作数组 -->
        <ul>
            <li v-for="(stu,index) in stus" :key = "index">
                index:{{index}},
                stu:{{stu}}
            </li>
        </ul>
        <!-- (2) 操作对象 -->
        <ul>
            <li v-for="(value,key,index) in person" :key = "index">
                index:{{index}},
                key:{{key}},
                value:{{value}}
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        stus:[{name:'mick',age:'18'},{name:'vicky',age:'20'}],
        person:{
          name:'大海',
          age:'222',
        }
      }
    }
  }
</script>

<style scoped>

</style>