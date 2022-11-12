<template>
    <div>
    <!-- 原始形式： -->
    <button @click="addCount1">+1(原始形式)</button>

    <!-- 辅助函数形式：如果不加这个括号和里面的参数，vue中方法的默认第一个参数   事件参数对象 如果不想默认就加上括号，写上想传的参数-->
    <button @click="addCount(100)">+100(辅助函数)</button>

    <!-- 异步调用  原始形式 -->
    <button @click="addCount2">异步调用（原始形式）</button>

    <!-- 异步调用  辅助函数 -->
    <button @click="getAsyncCount(22)">+异步调用辅助函数</button>

    <!-- 原始形式getters -->
    <div>
        原始形式getters:{{ $store.getters.filterList }}
    </div>

        <!-- 辅助函数mapGetters -->
        <div>辅助函数形式mapGetters{{ filterList }}</div>
    </div>
</template>

<script>
// 辅助函数：mapMutations
import  { mapMutations } from 'vuex'

// 辅助函数：mapActions,mapGetters
import { mapActions,mapGetters } from 'vuex'
export default {
    // 辅助函数:mapGetters  将getters中的计算属性导入到组件的计算属性中
    computed:{
        ...mapGetters(['filterList'])
    },

    methods:{
        // 原始方法调用
        addCount1(){
            // 调用store中的mutations提交给muations
            // 固定写法：commit('muation名称'，100)    后面的数值为载荷
             this.$store.commit('addCount',1)  //直接调用mutations
        },

        // 异步调用原始形式
        addCount2(){
            //commit是提交mutations
            // dispatch 调用action
            // dispatch(action的名称，传递的参数) 
            this.$store.dispatch('getAsyncCount',111)  //111为异步调用传参（原始形式）
        },
        
        // 辅助函数 mapMutations   
        ...mapMutations(['addCount']),   //此时组件方法中就会拥有一个对应的addCount方法

        // 辅助函数 mapActions
        ...mapActions(['getAsyncCount'])

    }
}
</script>

<style>

</style>