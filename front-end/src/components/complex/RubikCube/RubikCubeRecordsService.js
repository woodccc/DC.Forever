import _ from 'lodash'

function getGroupByDataTimeRecords(records) {
  return _.groupBy(records, 'dateTime')
}

export function calculateEverydayBest(records) {
  const groupByDataTimeRecords = getGroupByDataTimeRecords(records)
  return _.map(groupByDataTimeRecords, (record, key) => {
    return {
      dateTime: key,
      time: _.min(_.map(record, 'time'))
    }
  })
}

export function calculateEverydayAvg(records) {
  const groupByDataTimeRecords = getGroupByDataTimeRecords(records)
  return _.map(groupByDataTimeRecords, (record, key) => {
    return {
      dateTime: key,
      time: _.mean(_.map(record, 'time'))
    }
  })
}
