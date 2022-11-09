import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'  //引入vue包

Vue.config.productionTip = false
Vue.use(Vuex)   //注册Vuex的功能   Vue.use实际上是调用了Vuex中的一个install的方法
const store=new Vuex.Store({
  // 实例化Vuex的构造参数  而构造参数实际上是去填写vuex所需要的state mutations actions
  // 比如说你有一个状态需要在vuex中定义，那就需要在state构造参数中去写他的状态
  state:{
    // 管理数据
    count:0
  }
})  //实例化一个Vuex
new Vue({
  render: h => h(App),
  store   //ES6写法  即当store=store时，可以直接写成store
}).$mount('#app')
