import _ from 'lodash'

export function calculateEverydayBest(records) {
  const groupByDataTimeRecords = _.groupBy(records, 'dateTime')
  const best = _.map(groupByDataTimeRecords, (record, key) => {
    return {
      dateTime: key,
      time: _.min(_.map(record, 'time'))
    }
  })
  return best
}
