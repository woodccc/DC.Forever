import Vue from 'vue'
import Vuex from 'vuex'

import modules from '@/store/modules'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules
})
