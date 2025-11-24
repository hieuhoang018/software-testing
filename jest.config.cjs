/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  collectCoverage: false,
  coverageReporters: ["text", "lcov"],

  // Disable Babel/other transforms so Jest lets Node handle native ESM
  transform: {},
}
