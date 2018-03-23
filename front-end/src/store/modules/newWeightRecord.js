import mutationTypes from 'store/mutationTypes'

const state = {
  weightRecords: []
}

const getters = {}

const actions = {}

const mutations = {
  [mutationTypes.ADD_NEW_WEIGHT] (state, { weight }) {
    state.weightRecords.push({ ...{}, ...weight })
  },
  [mutationTypes.UPDATE_WEIGHT_RECORDS] (state, { weightRecords }) {
    state.weightRecords = weightRecords
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
