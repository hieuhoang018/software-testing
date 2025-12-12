import add from '../utils/add'

describe("add.js Unit Tests", () => {
  // TC1
  it("should add simple positive numbers", () => {
    const result = add(6, 4)

    expect(result).toBe(10)
  })

  // TC2
  it("should add one negative and one positive number", () => {
    const result = add(-3, 5)

    expect(result).toBe(2)
  })

  // TC3
  it("should return 0 when adding two 0s", () => {
    const result = add(0, 0)

    expect(result).toBe(0)
  })

  // TC4
  it("should add decimal numbers", () => {
    const result = add(1.5, 2.25)

    expect(result).toBe(3.75)
  })

  // TC5
  it("should return NaN when adding invalid string", () => {
    const result = add("abc", 1)

    expect(result).toBe(NaN)
  })

  // TC6
  it("should treat null as 0", () => {
    const result = add(null, 5)

    expect(result).toBe(5)
  })

  // TC7
  it("should return NaN when adding undefined", () => {
    const result = add(undefined, 5)

    expect(result).toBe(NaN)
  })

  // TC8
  it("should return NaN when adding NaN", () => {
    const result = add(NaN, 1)

    expect(result).toBe(NaN)
  })

  // TC9
  it("should return Infinity when adding Infinity", () => {
    const result = add(Infinity, 1)

    expect(result).toBe(Infinity)
  })

  // TC10
  it("should treat true as 1", () => {
    const result = add(true, 2)

    expect(result).toBe(3)
  })
})