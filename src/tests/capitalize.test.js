import capitalize from '../utils/capitalize.js'

describe("capitalize.js Unit Tests", () => {
  // TC1
  it("should capitalize first letter of a normal lowercase word", () => {
    const result = capitalize("test")

    expect(result).toBe("Test")
  })

  // TC2
  it("should only leave the first letter capitalized when received all uppercase word", () => {
    const result = capitalize("TEST")

    expect(result).toBe("Test")
  })

  // TC3
  it("should capitalize only the first letter of mixed case word", () => {
    const result = capitalize("tEsT")
    
    expect(result).toBe("Test")
  })

  // TC4
  it("should return empty string when receive empty string", () => {
    const result = capitalize("")

    expect(result).toBe("")
  })

  // TC5
  it("should convert non-string value to string", () => {
    const result = capitalize(null)

    expect(result).toBe("Null")
  })

  // TC6
  it("should convert undefined to string", () => {
    const result = capitalize(undefined)

    expect(result).toBe("Undefined")
  })

  // TC7
  it("should convert numbers to string", () => {
    const result = capitalize(123)

    expect(result).toBe("123")
  })

  // TC8
  it("should leave the whitespace when received word beginning with whitespace", () => {
    const result = capitalize(" test")

    expect(result).toBe(" test")
  })
})