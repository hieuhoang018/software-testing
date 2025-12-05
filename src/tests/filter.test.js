import filter from "../utils/filter.js"

describe("filter.js Unit Tests", () => {
  // TC1
  it("should filter the array based on the given params", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ]

    const result = filter(users, ({ active }) => active)

    expect(result).toEqual([{ user: "barney", active: true }])
  })

  // TC2
  it("should return empty array when given array is empty", () => {
    const array = []

    const result = filter(array, ({ active }) => active)
    expect(result).toEqual([])
  })
  
  // TC3
  it("should return empty array when given array is null", () => {
    const array = null

    const result = filter(array, ({ active }) => active)
    expect(result).toEqual([])
  })
})
