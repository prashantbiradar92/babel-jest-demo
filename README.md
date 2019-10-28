# babel-jest-demo

Install Jest using yarn:
```
yarn add --dev jest
```
Or npm:
```
npm install --save-dev jest
```
Note: Jest documentation uses yarn commands, but npm will also work. You can compare yarn and npm commands in the yarn docs, here.

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:

```
export defaut function sum(a, b) {
  return a + b;
}
```

Then, create a file named sum.test.js. This will contain our actual test:
```
import sum from './sum';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

```
Add the following section to your package.json:

```
{
  "scripts": {
    "test": "jest"
  }
}
```
Finally, run yarn test or npm run test and Jest will print this message:

PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
You just successfully wrote your first test using Jest!

This test used expect and toBe to test that two values were exactly identical. To learn about the other things that Jest can test, see Using Matchers.

Running from command line
You can run Jest directly from the CLI (if it's globally available in your PATH, e.g. by yarn global add jest or npm install jest --global) with a variety of useful options.


Using Babel

To use Babel, install required dependencies via yarn:

```
yarn add --dev babel-jest @babel/core @babel/preset-env
```

Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:
```
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
