import ceil from '../utils/ceil.js'

describe("ceil.js Unit Tests", () => {
  // TC1
  it("should round up number with default precision", () => {
    const result = ceil(4.006)

    expect(result).toBe(5)
  })

  // TC2
  it("should round up number with a positive precision", () => {
    const result = ceil(6.004, 2)

    expect(result).toBe(6.01)
  })

  // TC3
  it("should round up number with a negative precision", () => {
    const result = ceil(6040, -2)

    expect(result).toBe(6100)
  })

  // TC4
  it("should return NaN for invalid string as number", () => {
    const result = ceil("abc", 2)

    expect(result).toBe(NaN)
  })

  // TC5
  it("should return NaN for invalid string as precision", () => {
    const result = ceil(1234, "xyz")

    expect(result).toBe(NaN)
  })
})