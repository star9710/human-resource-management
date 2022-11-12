<template>
    <div>
        <!-- 用户的token和应用名称name -->
        <!-- {{ $store.state.模块名称.属性名 }} -->
        <div>
            用户名称：{{ $store.state.user.token }}
        </div>
        <div>
            用户名称：{{ $store.state.setting.name }}
        </div>

        <!-- 快捷访问子模块+辅助函数 -->
        <div>快捷访问子模块：{{ token }}</div>
        <div>快捷访问子模块：{{ name }}</div>
    </div>
</template>

<script>
// 辅助函数的形式  引入vuex
import { mapGetters } from 'vuex'
export default {
    // 再引入子模块的token和name
    computed:{
        ...mapGetters(['token','name'])
    }
}
</script>

<style>

</style>