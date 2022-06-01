## Contribution Guide

This project is open for contributions, all that is required is some preliminary understanding of [react](https://reactjs.org/docs/getting-started.html), [git](https://help.github.com/en/github/using-git) and [typescript](https://www.typescriptlang.org/assets/typescript-handbook.pdf).

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

### Recommendations

- New utils require creating a new document file (`.tsx`) in the `/pages/` folder.
- If you are creating a new component, testcases will be required for merge.
- If you only modify components, please run any existing tests with `yarn test-update`.
- (Optional) Modifying `testRegex` in `.jest.config.js` allows you to test only a single component.
- Please check coverage locally before submit.
