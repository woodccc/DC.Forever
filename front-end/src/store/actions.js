import _ from 'lodash'

import mutationTypes from 'store/mutationTypes'
import * as api from '@/api/api'

function loadWeightRecords (context) {
  api.loadWeightRecords()
    .then(response => {
      context.commit(mutationTypes.UPDATE_WEIGHT_RECORDS, {weightRecords: response.data})
    })
}

function deleteWeightRecord (context, id) {
  api.deleteWeightRecord(id)
    .then(() => {
      loadWeightRecords(context)
    })
}

function updateWeightRecord (context, weightRecord) {
    api.updateWeightRecord(weightRecord.id, _.omit(weightRecord, 'id'))
        .then(() => {
            loadWeightRecords(context)
        })
}

function login (context, form) {
    api.login(form)
        .then(() => {
        
        })
}

export default {
  login,
  updateWeightRecord,
  loadWeightRecords,
  deleteWeightRecord
}
