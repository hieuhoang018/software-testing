import get from "../utils/get.js"

describe("get.js Unit Tests", () => {
  const object = { a: [{ b: { c: 3 } }] }

  // TC1
  it("should get the correct value from the specified path", () => {
    const result = get(object, "a[0].b.c")

    expect(result).toBe(3)
  })

  // TC2
  it("should get the correct value from the specified array path", () => {
    const result = get(object, ["a", "0", "b", "c"])

    expect(result).toBe(3)
  })

  // TC3
  it("should return a default value when the value cannot be found", () => {
    const result = get(object, "a.b.c", "default")

    expect(result).toBe("default")
  })

  // TC4
  it("should return a default value when the specified value is null", () => {
    const result = get(null, "a.b.c", "default")

    expect(result).toBe("default")
  })

  // TC5
  it("should return a default value when the specified value is undefined", () => {
    const result = get(null, "a.b.c", "default")

    expect(result).toBe("default")
  })
})
