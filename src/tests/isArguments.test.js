import isArguments from '../utils/isArguments.js'

describe("isArguments.js Unit Tests", () => {
  // TC1
  it("should return true for an arguments object", () => {
    const result = isArguments(function() { return arguments }())

    expect(result).toBe(true)
  })

  // TC2
  it("should return false for an array", () => {
    const result = isArguments([1, 2, 3])

    expect(result).toBe(false)
  })

  // TC3
  it("should return false for a parameter value", () => {
    const result = isArguments(function(a, b) { return arguments[0] }("a", 2))

    expect(result).toBe(false)
  })
})