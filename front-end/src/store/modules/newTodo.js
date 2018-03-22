import mutationTypes from 'store/mutationTypes'

const state = {
  newTodo: ''
}

const getters = {
  newTodo: (state) => state.newTodo
}

// actions
const actions = {
  updateNewTodo (context, newTodoValue) {
    context.commit(mutationTypes.UPDATE_NEW_TODO, { newTodoValue })
  }
}

// mutations
const mutations = {
  [mutationTypes.UPDATE_NEW_TODO] (state, { newTodoValue }) {
    state.newTodo = newTodoValue
  },
  [mutationTypes.ADD_NEW_TODO] (state) {
    state.newTodo = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
