import isEmpty from '../utils/isEmpty'

test('null is empty: isEmpty(null) = true', () => {
  expect(isEmpty(null)).toBe(true)
})

test('boolean object is empty: isEmpty(true) = true', () => {
  expect(isEmpty(true)).toBe(true)
})

test('a number is empty: isEmpty(1.01) = true', () => {
  expect(isEmpty(1.01)).toBe(true)
})

test('an `arguments` object of a function that have no parameter is empty: isEmpty(function() { return arguments }()) = true', () => {
  expect(isEmpty(function() { return arguments }())).toBe(true)
})

test('check an empty prototype object: isEmpty(Object.prototype) = true', () => {
  expect(isEmpty(Object.prototype)).toBe(true)
})

test('a map with no value is empty: isEmpty(new Map()) = true', () => {
  expect(isEmpty(new Map())).toBe(true)
})

test('a set with values is not empty: isEmpty(new Set([1, 2, 3])) = false', () => {
  expect(isEmpty(new Set([1, 2, 3]))).toBe(false)
})

test('a list with values is not empty: isEmpty([1, 2, 3]) = false', () => {
  expect(isEmpty([1, 2, 3])).toBe(false)
})

test('a string is not empty: isEmpty("abc") = false', () => {
  expect(isEmpty("abc")).toBe(false)
})

test('an object with values is not empty: isEmpty({ "a": 1 }) = false', () => {
  expect(isEmpty({ "a": 1 })).toBe(false)
})