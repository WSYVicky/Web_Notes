<template>
    <div>
        <!--(1)一个样式: 返回字符串-->
        <div v-bind:class=" isPink ? 'pink' : 'hotpink' ">一个样式</div>
        <!--(2)多个样式：返回对象-->
        <div :class="{'hotpink':true,'big':true}">多个样式</div>
        <br/>
        <!--(3)复杂情况-->
        通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用成绩做key，取对象的value,最终返回字符串做样式名
        <ul>
            <li v-for="stu in stus" :class="{'A':'pink','B':'hotpink'}[stu.score]">
                {{stu.name}}{{stu.score}}
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        isPink:true,
        stus:[{name:'man',score:'A'},{name:'female',score:'B'}]
      }
    }
  }
</script>

<style scoped>
    div{
        height: 100px;
    }
    .big{
        font-size: larger;
    }
.pink{
    background-color:pink;
}
.hotpink{
    background-color:hotpink;
}
</style>