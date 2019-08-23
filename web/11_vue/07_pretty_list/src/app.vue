<template>
    <div>
        <ul>
            <li v-for="(hero,index) in heros" :key="index" :class="{'A':'A','B':'B','C':'C','D':'D'}[hero.score]">
                {{hero.name}},{{hero.score}}
                <button @click="del(index)">删除</button>
            </li>
        </ul>
        英雄名字：<input type="text" v-model="name">
        英雄分数：<input type="text" v-model="score">
        <button @click="add()">添加</button>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        name:'',
        score:'',
        heros:[{
          id:1,
          name:'vikcy',
          score:'A'
        },{
          id:2,
          name:'murking',
          score:'B'
        },{
          id:3,
          name:'mike',
          score:'C'
        },{
          id:4,
          name:'amy',
          score:'D'
        }],
      }
    },
    methods:{
      del(index){
        this.heros.splice(index,1);
      },
      add(){
        this.heros.push({
          name:this.name,
          score:this.score
        });
        this.name = '';
        this.score = '';
      }
    }
  }
</script>

<style scoped>
.A{
    background-color: pink;
}
.B{
    background-color: hotpink;
}
.C{
    background-color: plum;
}
.D{
    background-color: palevioletred;
}
</style>