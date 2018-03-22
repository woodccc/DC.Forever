import todoStatus from 'constants/todoStatus'
import mutationTypes from 'store/mutationTypes'

import { filter } from 'lodash'

const state = {
  todos: []
}

const getters = {
  todos: (state) => state.todos,
  filterTodos: (state, { todoFilter }) => {
    if (todoFilter === 'ALL') {
      return state.todos
    } else {
      return filter(state.todos, todo => todo.status === todoFilter)
    }
  }
}

const actions = {
  doneTodo (context, todo) {
    context.commit(mutationTypes.DONE_TODO, { todo })
  }
}

const mutations = {
  [mutationTypes.ADD_NEW_TODO] (state, payload) {
    const newTodo = {
      id: state.todos.length,
      text: payload.newTodo,
      status: todoStatus.NOT_DONE
    }
    state.todos.push(newTodo)
  },
  [mutationTypes.DONE_TODO] (state, payload) {
    payload.todo.status = todoStatus.DONE
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
