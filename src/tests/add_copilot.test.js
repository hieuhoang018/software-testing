import add from '../utils/add.js'

describe("add_copilot.js Unit Tests", () => {
  // TC1
  it("should add large numbers", () => {
    const result = add(1000000, 2000000)

    expect(result).toBe(3000000)
  })

  // TC2
  it("should add both negative numbers", () => {
    const result = add(-5, -3)

    expect(result).toBe(-8)
  })

  // TC3
  it("should add negative and zero", () => {
    const result = add(-10, 0)

    expect(result).toBe(-10)
  })

  // TC4
  it("should add small decimals approximately", () => {
    const result = add(0.1, 0.2)

    expect(result).toBeCloseTo(0.3)
  })

  // TC5
  it("should treat false as 0", () => {
    const result = add(false, 5)

    expect(result).toBe(5)
  })

  // TC6
  it("should add negative infinity", () => {
    const result = add(-Infinity, 1)

    expect(result).toBe(-Infinity)
  })

  // TC7
  it("should handle chained operations", () => {
    const result = add(add(1, 2), 3)

    expect(result).toBe(6)
  })

  // TC8
  it("should add very large decimals approximately", () => {
    const result = add(999.999, 0.001)

    expect(result).toBeCloseTo(1000)
  })
})