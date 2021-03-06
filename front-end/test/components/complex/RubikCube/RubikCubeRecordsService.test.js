import { calculateEverydayBest, calculateEverydayAvg } from '../../../..//src/components/complex/RubikCube/RubikCubeRecordsService'

const records = [
  { dateTime: '2018-05-11', time: 2 },
  { dateTime: '2018-05-11', time: 1 },
  { dateTime: '2018-05-12', time: 4 },
  { dateTime: '2018-05-12', time: 3 },
  { dateTime: '2018-05-13', time: 6 },
  { dateTime: '2018-05-13', time: 5 }
]

test('should return everyday best record', () => {
  const result = [
    { dateTime: '2018-05-11', time: 1 },
    { dateTime: '2018-05-12', time: 3 },
    { dateTime: '2018-05-13', time: 5 },
  ]
  expect(calculateEverydayBest(records)).toEqual(result)
})

test('should return everyday avg record', () => {
  const result = [
    { dateTime: '2018-05-11', time: 1.5 },
    { dateTime: '2018-05-12', time: 3.5 },
    { dateTime: '2018-05-13', time: 5.5 },
  ]
  expect(calculateEverydayAvg(records)).toEqual(result)
})
