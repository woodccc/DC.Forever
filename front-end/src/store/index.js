import Vue from 'vue'
import Vuex from 'vuex'

import weightRecords from './modules/weightRecords'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    weightRecords
  }
})
