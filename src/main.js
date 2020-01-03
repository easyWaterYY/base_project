import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import * as api from './http/api.js'
Vue.prototype.$api = api

import router from './router/router'
import store from './store/vuex'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
