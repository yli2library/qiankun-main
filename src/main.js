import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import startQiankun from './micro'
import routes from './router'

Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false

startQiankun()

/**
 * 注册路由实例
 * 即将开始监听location变化，触发路由规则
 */
const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 * 创建vue实例
 * 该实例将挂载在id为main-app的节点上
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#main-app')
