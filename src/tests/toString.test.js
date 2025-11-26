import toString from "../utils/toString.js"

describe("toString.js Unit Tests", () => {
  // // TC1
  // it("should return an empty string when given a null value", () => {
  //   const result = toString(null)

  //   expect(result).toBe("")
  // })

  // TC2
  it("should convert a number to its string version", () => {
    const result = toString(2)

    expect(result).toBe("2")
  })

  // TC3
  it("should convert a negative number to its string version", () => {
    const result = toString(-2)

    expect(result).toBe("-2")
  })

  // TC4
  it("should convert an array to its string version", () => {
    const result = toString([1, 2, 3])

    expect(result).toBe("1,2,3")
  })

  // TC5
  it("should return the same string when given a string", () => {
    const result = toString("test")

    expect(result).toBe("test")
  })

  // TC6
  it("should preserve the sign of -0", () => {
    const value = -0
    const result = toString(value)

    expect(result).toBe("-0")
  })

  // TC7
  it("should convert arrays containing null and undefined correctly", () => {
    expect(toString([1, null, 3])).toBe("1,,3")
    expect(toString([undefined])).toBe("")
  })

  // TC8
  it("should convert a symbol to its string representation", () => {
    const sym = Symbol("test")
    const result = toString(sym)

    expect(result).toBe(sym.toString())
  })
})
