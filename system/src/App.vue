<template>
  <div id="app">
    <!-- 原始形式应用——差值表达式
    在模板中不需要写this,就可以直接默认当前的组件值-->
    <div>原始形式获取state状态:{{ $store.state.count }}</div>
    <!-- 计算属性 将state属性定义在计算属性中 -->
    <!-- 辅助函数 - mapState -->
    <div>state的数据:{{ count }}</div>
    <div>state的数据:{{ count }}</div>
    <div>state的数据:{{ count }}</div>
    <div>state的数据:{{ count }}</div>

    <!-- 点击按钮绑定，可以用一下两种方法中的任意一方法 -->
    <!-- <ChildA/> -->
    <child-a/>
    <!-- 模块化 -->
    <child-b/>
  </div>
</template>

<script>
// 辅助函数：通过import {} from 引入'vuex'模块，在这个模块中解构出一个mapState方法，这个方法可以在计算属性中（computed）使用
import { mapState } from 'vuex'

// 引入child-a组件
import ChildA from './components/child-a.vue'

// 引入child-b组件
import ChildB from './components/child-b.vue'

export default {
  name: 'App',
  // 局部注册组件
  components:{
    ChildA,ChildB
  },

    // 把state中数据，定义在组件内的计算属性中
  computed: {
    // 方法二：辅助函数-mapState     采用数组形式引入state属性，在mapState方法中传入数组，数组中是一个字符串，这个字符串就是我们要引入的state属性  并利用延展运算符（延展运算符表示可以引入多个state属性）
    ...mapState(['count'])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
