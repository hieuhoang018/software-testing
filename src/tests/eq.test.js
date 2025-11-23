import eq from "../utils/eq.js"

describe("eq.js Unit Tests", () => {
  // TC1
  it("should return true for two identical objects", () => {
    const object = { a: 1 }

    const result = eq(object, object)

    expect(result).toBe(true)
  })

  // TC2
  it("should return false for different objects with the same properties", () => {
    const object = { a: 1 }
    const other = { a: 1 }

    const result = eq(object, other)

    expect(result).toBe(false)
  })

  // TC3
  it("should return true for two identical strings", () => {
    const s1 = "a"
    const s2 = "a"

    const result = eq(s1, s2)
    expect(result).toBe(true)
  })

  // TC4
  it("shouild return false for a string and an object-wrapped string ", () => {
    const string = "a"
    const ostring = Object("a")

    const result = eq(string, ostring)
    expect(result).toBe(false)
  })

  // TC5
  it("should return true for two non numerical values", () => {
    const nan1 = NaN
    const nan2 = NaN

    const result = eq(nan1, nan2)
    expect(result).toBe(true)
  })
})
