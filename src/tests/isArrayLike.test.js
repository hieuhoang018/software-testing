import isArrayLike from '../utils/isArrayLike.js'

describe("isArrayLike.js Unit Tests", () => {
  // TC1
  it("should return true for an array", () => {
    const result = isArrayLike([1, 2, 3])

    expect(result).toBe(true)
  })

  // TC2
  it("should return true for a string", () => {
    const result = isArrayLike("abc")

    expect(result).toBe(true)
  })

  // TC3
  it("should return false for a function", () => {
    const result = isArrayLike(Function)

    expect(result).toBe(false)
  })

  // TC4
  it("should return false for a number", () => {
    const result = isArrayLike(1)

    expect(result).toBe(false)
  })

  // TC5
  it("should return false for null", () => {
    const result = isArrayLike(null)

    expect(result).toBe(false)
  })

  // TC6
  it("should return true for an arguments object", () => {
    const result = isArrayLike(function() { return arguments }())

    expect(result).toBe(true)
  })
})