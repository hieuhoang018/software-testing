import ceil from '../utils/ceil'

test('round up number with default precision (precision=0): ceil(4.006) = 5', () => {
  expect(ceil(4.006)).toBe(5)
})

test('round up number with a positive precision: ceil(6.004, 2) = 6.01', () => {
  expect(ceil(6.004, 2)).toBe(6.01)
})

test('round up number with a negative precision: ceil(6040, -2) = 6100', () => {
  expect(ceil(6040, -2)).toBe(6100)
})

test('invalid string as the number to be rounded up: ceil("abc", 2) = NaN', () => {
  expect(ceil("abc", 2)).toBe(NaN)
})

test('invalid string as the precision: ceil(1234, "xyz") = NaN', () => {
  expect(ceil(1234, "xyz")).toBe(NaN)
})