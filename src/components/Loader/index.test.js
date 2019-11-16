import React from 'react';
import { render, cleanup } from '@testing-library/react';

// component to test
import { Loader } from '.';

// should be in setupTests.js?
afterEach(cleanup);

// The test calls the render function provided by React Testing Library,
// which returns an object that we can extract asFragment from. Using
// this we can use the built-in functionality from Jest to perform a snapshot test.
it('renders', () => {
  const { asFragment } = render(
    <Loader color="#1089ff" height={100} width={100} />
  );
  expect(asFragment()).toMatchSnapshot();
});
