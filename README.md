# eth utils

Common, accessible utilities for ethereum developers working on frontend, smart contracts and security.

## Support

- [x] Unit converter (eg. wei, gwei, eth)
- [x] Hexadecimal to decimal converter (eg. 0x123 -> 291)
- [x] Checksum
- [ ] ABI encoder
- [ ] UTF8 to ASCII

## Quick Start

```bash
# to install dependencies
yarn

# to launch dev environment
yarn dev

# to create site metadata
yarn docs:collect
```

## Contribution Guide

This project is open for contributions, all that is required is a preliminary understanding of [react](https://reactjs.org/docs/getting-started.html), [git](https://help.github.com/en/github/using-git) and [typescript](https://www.typescriptlang.org/assets/typescript-handbook.pdf).

The steps to get started are as follows:

1. Clone the repo with:
   `git checkout -b {BRANCH_NAME}`

2. Create a new branch for your feature with:
   `git checkout -b {BRANCH_NAME}`

3. Install yarn and the project's dependencies with:
   `yarn`
4. Run dev environment with:
   `yarn dev`

### Work Submission

1. Commit a change in the [corresponding format](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md) with:
   `git commit -m '{YOUR_MESSAGE}'`
2. Push the commit to your repo and create a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) on Github

### Guidelines

### Creating a new utility

- Create a document file (`.tsx`) in the `/pages/en-us` folder
- Export the meta information
- Run `yarn docs:collect` to update the site metadata

### Creating testcases

1. If you are creating a new component, the testcase is required.
2. If you only modify components, please run any existing tests with `yarn test-update`.
3. (Optional) Modifying `testRegex` in `.jest.config.js` allows you to test only a single component.
4. Please check coverage locally before submit.

## Support

Feel free to create an [issue](https://github.com/geist-org/geist-ui/issues/new/choose) regarding bugs, feature requests or any othe concern.
