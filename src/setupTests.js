// jest.mock('scheduler', () => require('scheduler/unstable_mock'));

// we need to use the real fetch for some tests and mock fetch for others
global.realFetch = global.fetch;
global.fetch = require('jest-fetch-mock');

// setup react testing library
import '@testing-library/jest-dom/extend-expect';

// eslint-disable-next-line no-console
const error = console.error;
// eslint-disable-next-line no-console
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};
