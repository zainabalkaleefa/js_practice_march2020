# Challenges

This week's challenges encourage you to keep on practicing your JavaScript skills!

1. If you have not completed last week's challenges or you have received comments from us on Github, please revisit last the Week 1 challenges to complete/revise them before moving on
2. Run `npm run eslint` in your terminal. Make sure you fix any linting errors from last week's work.
3. If you made any changes in the previous 2 steps, make sure to commit them.
4. Take a look at the `test/week2.test.js` file where you will see the tests for this week's functions.
5. Complete the functions in `challenges/week2.js` in order to make the tests pass. Remember that you can pause tests or run only specific tests - see the main [README.md](../README.md) file for details.
6. If you want to only run a specific test _file_ (which you probably do want to do, since using .only only works within a single file) then go to the `package.json` file and update the `test` script section so that it looks like this:

```json
"scripts": {
    "test": "jest test/week2.test.js",
    "eslint": "eslint ./"
  },
```

Remember to change it back afterwards so it's running all the tests again!
