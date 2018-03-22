import mutationTypes from 'store/mutationTypes'

const state = {
  todoFilter: 'ALL'
}

// getters
const getters = {
  todoFilter: state => state.todoFilter
}

// mutations
const mutations = {
  [mutationTypes.UPDATE_TODO_FILTER] (state, { newTodoFilter }) {
    state.todoFilter = newTodoFilter
  }
}

export default {
  state,
  getters,
  mutations
}
