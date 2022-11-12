import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'  //引入vue包

Vue.config.productionTip = false
Vue.use(Vuex)   //注册Vuex的功能   Vue.use实际上是调用了Vuex中的一个install的方法
const store = new Vuex.Store({
  // 实例化Vuex的构造参数  而构造参数实际上是去填写vuex所需要的state mutations actions
  // 比如说你有一个状态需要在vuex中定义，那就需要在state构造参数中去写他的状态
  state:{
    // 管理数据   公共的共享状态（任何组件都可以去取用的状态 ）
    count:0,
    // getters
    list:[1,2,3,4,5,6,7,8,9,10]
  },
  // 定义mutations  state数据的修改只能通过mutations，并且mutations必须是同步更新，目的是形成数据快照
  mutations:{
    // addCount是自定义，非固定名称  
    // 这里采用es6写法，es5需要加上:function
    // 每一个mutation方法都有对应的参数  第一个参数是当前store的state属性
    // payload 载荷 运输参数 调用mutaiions的时候 可以传递参数 可以是任何形式的、任何类型的（传数组、对象、布尔值等等都可以）  不需要传的可以不传
    addCount (state,payload) {
      state.count += payload
    }
  },
  // 异步更新
  // 从后端获取一个数据  更新到state的count中
  actions:{
    // 方法
    // action方法参数    第一个参数  执行上下文对象 context
    // context相当于组件中的this.$store==>指当前store的运行实例   context就是this.$store的运行实例
    getAsyncCount(context,params){
      // 做异步请求
      // 模拟异步请求   延迟1000毫秒然后执行回调函数
      setTimeout(function(){
        // 获取得到一个值
        // 123
        // 在此处通过context.commit调用一个mutation方法————调用addCount这个mutation,然后传入我们要传入的载荷“123”
        context.commit("addCount",params)  //这样也就通过action这个动作执行了一个异步的请求，在1秒钟之后，将123提交给了addCount这个mutat
      },1000)
    }
  },
  // 除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters
  // 放置的所有的vuex的计算属性
  getters:{
/* ES5写法     // 自定义一个filterList 非固定属性名   里面对应一个回调函数
    // state 指的是当前store中的state
    filterList:function(state){
      // 再通过state拿到list  回调函数  filter过滤器找到大于5的数据 如果大于5就返回新数组，小于5就不返回 
      return state.list.filter(item => item > 5)
    } */

    // ES6写法  更常见
    filterList:state => state.list.filter(item => item > 5),

    // 快捷访问子模块
    // 定义token，来源于state里面的state下的子模块的token
    token:state => state.user.token,
    name:state => state.setting.name,
  },
  // 放置子模块
  modules:{
    user:{
      state:{
        // token是后面需要用到的一个秘钥
        token:'12345'
      }
    },
    setting:{
      state:{
        name:'Vuex实例'
      }
    }
  }
})  //实例化一个Vuex
new Vue({
  render: h => h(App),
  store   //ES6写法  即当store=store时，可以直接写成store
}).$mount('#app')
