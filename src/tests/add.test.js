import add from '../utils/add'

test('simple positive numbers: add(6, 4) = 10', () => {
  expect(add(6, 4)).toBe(10)
})

test('one negative and one positive numbers: add(-3, 5) = 2', () => {
  expect(add(-3, 5)).toBe(2)
})

test('sum of two 0s: add(0, 0) = 0', () => {
  expect(add(0, 0)).toBe(0)
})

test('decimal numbers: add(1.5, 2.25) = 3.75', () => {
  expect(add(1.5, 2.25)).toBe(3.75)
})

test('invalid string becomes NaN: add("abc", 1) = NaN', () => {
  expect(add("abc", 1)).toBe(NaN)
})

test('null becomes 0: add(null, 5) = 5', () => {
  expect(add(null, 5)).toBe(5)
})

test('undefined equal NaN: add(undefined, 5) = NaN', () => {
  expect(add(undefined, 5)).toBe(NaN)
})

test('addition containing NaN stays NaN: add(NaN, 1) = NaN', () => {
  expect(add(NaN, 1)).toBe(NaN)
})

test('infinity stays infinity: add(Infinity, 1) = Infinity', () => {
  expect(add(Infinity, 1)).toBe(Infinity)
})

test('true becomes 1: add(true, 2) = 3', () => {
  expect(add(true, 2)).toBe(3)
})