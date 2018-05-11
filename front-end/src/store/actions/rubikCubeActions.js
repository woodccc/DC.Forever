import mutationTypes from 'store/mutationTypes'
import * as api from '@/api/api'

function loadSpeed3Records(context) {
  return new Promise((resolve) => {
    api.loadSpeed3Records()
      .then((response) => {
        context.commit(mutationTypes.SPEED_3_RECORDS_RECEIVED, { speed3Records: response.data })
        resolve()
      })
  })
}

function saveSpeed3Record(context, time) {
  return new Promise((resolve) => {
    api.saveSpeed3Record({ time })
      .then(() => {
        loadSpeed3Records(context)
        resolve()
      })
  })
}

export default {
  loadSpeed3Records,
  saveSpeed3Record
}
