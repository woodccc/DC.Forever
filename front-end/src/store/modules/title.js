import mutationTypes from 'store/mutationTypes'

const state = {
  title: ''
}

// getters
const getters = {
  title: state => state.title
}

// actions
const actions = {
  updateTitle(context, title) {
    context.commit(mutationTypes.UPDATE_TITLE, { title })
  }
}

// mutations
const mutations = {
  [mutationTypes.UPDATE_TITLE](state, { title }) {
    state.title = title
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
