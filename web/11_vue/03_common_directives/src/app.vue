<template>
    <div>
        <hr/>
        <h3>v-text</h3>
        <h4>元素的innerText只能在双标签中使用</h4>
        <span v-text="text"></span>
        <hr/>

        <h3>v-html</h3>
        <h4>元素的innerHTML，不能包含<!--{{xxx}}--></h4>
        <span v-html="html"></span>
        <hr/>

        <hr/>
        <h3>v-if</h3>
        <h4>元素是否移除或者插入</h4>
        <div v-if="isShow" style="background-color:pink;height: 100px"></div>
        <hr/>

        <hr/>
        <h3>v-show</h3>
        <h4>元素是否显示或隐藏</h4>
        <div v-show="isShow" style="background-color:hotpink;height: 100px"></div>
        <hr/>

        <hr/>
        <h3>v-model</h3>
        <h4>双向数据绑定</h4>
        <input type="text" v-model="vtext"><br/>
        {{vtext}}
        <hr/>

        <hr/>
        <h3>v-bind</h3>
        <h4>单向数据绑定(内存js改变影响页面)</h4>
        <h4>改变这里的数据，并不会改变js内存属性的数据</h4>
        <input type="text" v-bind:value="vtext"><br/>
        <hr/>
    </div>
</template>
<script>
export default {
    data(){
      return{
        text:'我是innetText玩的东西',
        html:`
            <ul>
                <li>哈哈</li>
                <li>{{text}}</li>
            </ul>
        `,
        isShow:true,
        vtext:'haha'
      }
    }
}
</script>
<style></style>