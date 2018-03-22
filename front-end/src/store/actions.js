import _ from 'lodash'

import mutationTypes from 'store/mutationTypes'
import * as api from '@/api/api'

function addNewTodo (context) {
  const newTodo = context.getters.newTodo

  if (newTodo.trim() === '') {
    return
  }

  context.commit(mutationTypes.ADD_NEW_TODO, { newTodo })
}

function updateTodoFilter (context, newTodoFilter) {
  context.commit(mutationTypes.UPDATE_TODO_FILTER, { newTodoFilter })
}

function loadWeightRecords (context) {
  api.loadWeightRecords()
    .then(response => {
      context.commit(mutationTypes.UPDATE_WEIGHT_RECORDS, {weightRecords: response.data})
    })
}

function addNewWeightRecord (context, weightRecord) {
  api.addNewWeightRecord(weightRecord)
    .then(() => {
      loadWeightRecords(context)
    })
}

function deleteWeightRecord (context, id) {
  api.deleteWeightRecord(id)
    .then(() => {
      loadWeightRecords(context)
    })
}

function updateWeightRecord (context, weightRecord) {
    api.updateWeightRecord(weightRecord._id, _.omit(weightRecord, '_id'))
        .then(() => {
            loadWeightRecords(context)
        })
}

export default {
  updateWeightRecord,
  addNewWeightRecord,
  addNewTodo,
  loadWeightRecords,
  deleteWeightRecord,
  updateTodoFilter
}
