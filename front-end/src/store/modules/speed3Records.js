import _ from 'lodash'
import moment from 'moment'
import mutationTypes from 'store/mutationTypes'

const state = {
  speed3Records: []
}

// getters
const getters = {
  speed3Records: state => state.speed3Records,
  formatDateTimeSpeed3Records: state => _.map(state.speed3Records, item => {
    return {
      dateTime: moment(item.dateTime).format('YYYY-MM-DD'),
      time: item.time
    }
  }),
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
