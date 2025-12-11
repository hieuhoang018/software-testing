# Software Testing Assignment

This repository contains the unit tests, CI configuration, and coverage reporting setup implemented for a util function library. The project executes unit tests for the selected utility functions and integrates automated testing through GitHub Actions and Coveralls.

## Running Tests Locally

### Install dependencies

```
npm install
```

### Run the test suite

```
npm test
```

### Run tests with coverage

```
npm run test:coverage
```

A coverage summary will appear in the terminal, and detailed reports will be generated under the `coverage/` directory.

## ⚙️ Continuous Integration

GitHub Actions is configured to:

1. Install dependencies
2. Run all unit tests
3. Generate coverage
4. Upload the LCOV report to Coveralls

The workflow triggers on pushes to `main` and pull requests targeting `main`.

## 📊 Coverage Reporting

Coverage results are uploaded automatically to [**Coveralls**](https://coveralls.io/github/hieuhoang018/software-testing?branch=main).

# Coveralls Coverage Status

[![Coverage Status](https://coveralls.io/repos/github/hieuhoang018/software-testing/badge.svg?branch=main)](https://coveralls.io/github/hieuhoang018/software-testing?branch=main)
