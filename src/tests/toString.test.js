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
})
