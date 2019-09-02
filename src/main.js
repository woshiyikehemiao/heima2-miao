import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import axios from './untils/axios-config'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import Component from './components'
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'//放在axios的单独设置中
// Vue.prototype.$axios = axios //同上

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(axios)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
