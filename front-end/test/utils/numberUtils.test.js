import { toTwo, toReadbleTime } from '../../src/utils/numberUtils'

test('2 > "02"', () => {
  expect(toTwo(2)).toBe('02')
})
test('10 > "10"', () => {
  expect(toTwo(10)).toBe('10')
})
test('12 > "12"', () => {
  expect(toTwo(12)).toBe('12')
})

test('分、秒、十毫秒都为一位数(12107)', () => {
  expect(toReadbleTime(12107)).toBe('02:01:07')
})
test('分秒为0，十毫秒为两位数(35)', () => {
  expect(toReadbleTime(35)).toBe('00:00:35')
})
test('分为0，秒为一位数(789)', () => {
  expect(toReadbleTime(789)).toBe('00:07:89')
})
test('分为0，秒为两位数(4589)', () => {
  expect(toReadbleTime(4589)).toBe('00:45:89')
})
test('分为一位数，秒为两位数(7872)', () => {
  expect(toReadbleTime(7872)).toBe('01:18:72')
})
test('分为1，秒为0(6077)', () => {
  expect(toReadbleTime(6077)).toBe('01:00:77')
})
test('分为2，秒为0(12076)', () => {
  expect(toReadbleTime(12076)).toBe('02:00:76')
})
test('分为20，秒为0(120076)', () => {
  expect(toReadbleTime(120076)).toBe('20:00:76')
})
test('分为两位数，秒为一位数(76077)', () => {
  expect(toReadbleTime(76077)).toBe('12:40:77')
})
