import isArrayLike from '../utils/isArrayLike'

test('simple list is array-like: isArrayLike([1, 2, 3]) = true', () => {
  expect(isArrayLike([1, 2, 3])).toBe(true)
})

test('a string is array-like: isArrayLike("abc") = true', () => {
  expect(isArrayLike("abc")).toBe(true)
})

test('a function is not array-like: isArrayLike(Function) = false', () => {
  expect(isArrayLike(Function)).toBe(false)
})

test('a single number is not array-like: isArrayLike(1) = false', () => {
  expect(isArrayLike(1)).toBe(false)
})

test('null is not array-like: isArrayLike(null) = false', () => {
  expect(isArrayLike(null)).toBe(false)
})

test('an `arguments` object is array-like: isArrayLike(function() { return arguments }()) = true', () => {
  expect(isArrayLike(function() { return arguments }())).toBe(true)
})