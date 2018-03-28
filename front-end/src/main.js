import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

import VueQriously from 'vue-qriously'

Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(VueQriously)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
