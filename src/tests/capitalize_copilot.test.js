import capitalize from "../utils/capitalize.js"

// Additional coverage for capitalize utility without modifying existing tests

describe("capitalize.js Copilot Tests", () => {
  it("should capitalize the first word and lowercase the rest in a multi-word string", () => {
    const result = capitalize("hello WORLD")
    expect(result).toBe("Hello world")
  })

  it("should preserve leading whitespace while capitalizing first non-space character", () => {
    const result = capitalize("  hello")
    expect(result).toBe("  hello")
  })

  it("should handle accented characters and lowercase the remainder", () => {
    const result = capitalize("çAFe")
    expect(result).toBe("Çafe")
  })

  it("should convert array input to string then capitalize", () => {
    const result = capitalize(["hi", "THERE"])
    expect(result).toBe("Hi,there")
  })

  it("should capitalize String objects the same as primitives", () => {
    const boxed = new String("mixed CASE")
    const result = capitalize(boxed)
    expect(result).toBe("Mixed case")
  })

  it("should preserve the sign of negative zero", () => {
    const result = capitalize(-0)
    expect(result).toBe("-0")
  })
})
