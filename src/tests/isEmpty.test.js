import isEmpty from '../utils/isEmpty.js'

describe("isEmpty.js Unit Tests", () => {
  // TC1
  it("should return true for null", () => {
    const result = isEmpty(null)

    expect(result).toBe(true)
  })

  // TC2
  it("should return true for a boolean", () => {
    const result = isEmpty(true)

    expect(result).toBe(true)
  })

  // TC3
  it("should return true for a number", () => {
    const result = isEmpty(1.01)

    expect(result).toBe(true)
  })

  // TC4
  it("should return true for an empty arguments object", () => {
    const result = isEmpty(function() { return arguments }())

    expect(result).toBe(true)
  })

  // TC5
  it("should return true for Object.prototype", () => {
    const result = isEmpty(Object.prototype)

    expect(result).toBe(true)
  })

  // TC6
  it("should return true for an empty Map", () => {
    const result = isEmpty(new Map())

    expect(result).toBe(true)
  })

  // TC7
  it("should return false for a non-empty Set", () => {
    const result = isEmpty(new Set([1, 2, 3]))

    expect(result).toBe(false)
  })

  // TC8
  it("should return false for a non-empty array", () => {
    const result = isEmpty([1, 2, 3])

    expect(result).toBe(false)
  })

  // TC9
  it("should return false for a non-empty string", () => {
    const result = isEmpty("abc")

    expect(result).toBe(false)
  })

  // TC10
  it("should return false for a non-empty object", () => {
    const result = isEmpty({ "a": 1 })

    expect(result).toBe(false)
  })
})