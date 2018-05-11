// import mutationTypes from 'store/mutationTypes'
import * as api from '@/api/api'

function saveSpeed3Record(context, time) {
  return new Promise((resolve) => {
    api.saveSpeed3Record({ time })
      .then(() => {
        resolve()
      })
  })
}

export default {
  saveSpeed3Record
}
