// jest.mock('scheduler', () => require('scheduler/unstable_mock'));

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
