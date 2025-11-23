/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",

  // Disable Babel/other transforms so Jest lets Node handle native ESM
  transform: {},
}