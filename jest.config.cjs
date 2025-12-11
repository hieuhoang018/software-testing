/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  collectCoverage: false,
  coverageReporters: ["text", "lcov"],

  transform: {},

  // Only collect coverage from source utils, exclude .internal
  collectCoverageFrom: [
    "src/utils/**/*.js",      // your actual library code
    "!src/utils/.internal/**" // exclude internal helpers
  ],

  // Extra safety: ignore internals and coverage output
  coveragePathIgnorePatterns: [
    "/.internal/",
    "/coverage/",             // ignore coverage output folder
  ],
}
