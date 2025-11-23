import eq from "../utils/eq.js"

describe("eq.js Unit Tests", () => {
  // TC-1: Compares two identical objects
  it("should return true for two identical objects", () => {
    // Arrange
    const object = { a: 1 }

    // Act
    const result = eq(object, object)

    // Verify
    expect(result).toBe(true)
  })
})
