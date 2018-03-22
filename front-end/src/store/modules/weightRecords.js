import moment from 'moment'
import _ from 'lodash'

import mutationTypes from 'store/mutationTypes'

const state = {
  weightRecords: []
}

const getters = {
  weightRecords: (state) => {
    return _.map(state.weightRecords, weightRecord => {
      return { ...weightRecord, date: moment(weightRecord.date).format('YYYY/MM/DD') }
    })
  }
}

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
