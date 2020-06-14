// 导入vue
import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 导入路由
import router from './router'
// 导入vuex
import store from './store'
// 导入初始样式
import '@/style/base.less'
// 导入element
import ElementUI from 'element-ui'
// 导入element样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入axios
import axios from 'axios'
// 把axios放进vue原型中
Vue.prototype.$http = axios
// 设置基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
