import _ from 'lodash'
import mutationTypes from 'store/mutationTypes'

const state = {
  speed3Records: []
}

// getters
const getters = {
  speed3Records: state => state.speed3Records,
  lastFiveSpeed3Records: state => _.map(_.takeRight(state.speed3Records, 5), 'time'),
  fastestRecord: (state, getters) => _.min(getters.lastFiveSpeed3Records),
  slowestRecord: (state, getters) => _.max(getters.lastFiveSpeed3Records)
}

// actions
const actions = {}

// mutations
const mutations = {
  [mutationTypes.SPEED_3_RECORDS_RECEIVED](state, { speed3Records }) {
    state.speed3Records = speed3Records
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
