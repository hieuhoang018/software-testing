import add from '../utils/add'

test('large numbers: add(1000000, 2000000) = 3000000', () => {
  expect(add(1000000, 2000000)).toBe(3000000)
})

test('both negative numbers: add(-5, -3) = -8', () => {
  expect(add(-5, -3)).toBe(-8)
})

test('negative and zero: add(-10, 0) = -10', () => {
  expect(add(-10, 0)).toBe(-10)
})

test('small decimals: add(0.1, 0.2) ≈ 0.3', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3)
})

test('false becomes 0: add(false, 5) = 5', () => {
  expect(add(false, 5)).toBe(5)
})

test('negative infinity: add(-Infinity, 1) = -Infinity', () => {
  expect(add(-Infinity, 1)).toBe(-Infinity)
})

test('chained operations: add(add(1, 2), 3) = 6', () => {
  expect(add(add(1, 2), 3)).toBe(6)
})

test('very large decimal: add(999.999, 0.001) = 1000', () => {
  expect(add(999.999, 0.001)).toBeCloseTo(1000)
})