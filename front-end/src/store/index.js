import Vue from 'vue'
import Vuex from 'vuex'

import todos from './modules/todos'
import newTodo from './modules/newTodo'
import todoFilter from './modules/todoFilter'
import weightRecords from './modules/weightRecords'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    todos,
    todoFilter,
    weightRecords,
    newTodo
  }
})
