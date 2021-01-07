import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import serve from '@/server/api.js'
Vue.use(ElementUI)
//全局配置,挂载到vue原型上
axios.defaults.baseURL = 'http://192.168.43.53:8080'
Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
