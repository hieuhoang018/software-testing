import isArguments from '../utils/isArguments'

test('checking an `arguments` object: isArguments(function() { return arguments }()) = true', () => {
  expect(isArguments(function() { return arguments }())).toBe(true)
})

test('a list is not an `arguments` object: isArguments([1, 2, 3]) = false', () => {
  expect(isArguments([1, 2, 3])).toBe(false)
})

test('the value of the parameter is not an `arguments` object: isArguments(function(a, b) { return arguments[0] }("a", 2)) = false', () => {
  expect(isArguments(function(a, b) { return arguments[0] }("a", 2))).toBe(false)
})