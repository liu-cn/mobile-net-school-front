import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index.js'
import store from './store'
import VantUi from "./VantUi"


import axios from "axios"

import("@/assets/css/normalize.css")
import("@/assets/css/global.css")

Vue.prototype.$ajax=axios

Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
