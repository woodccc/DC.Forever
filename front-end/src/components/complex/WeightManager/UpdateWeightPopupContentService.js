import _ from 'lodash'

import moment from 'moment'

export const getDefaultRecord = (records) => {
  return {
    date: moment().format('YYYY/MM/DD'),
    weight: getLatestWeightByTag(records, 'CL'),
    tag: 'CL'
  }
}

export const getLatestWeightByTag = (records, tag) => {
  const latestWeight = _.last(_.filter(records, record => record.tag === tag))
  return _.get(latestWeight, 'weight', '0')
}
