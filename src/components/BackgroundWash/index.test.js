// After importing the necessary packages, we can write a test which calls
// the render function provided by React Testing Library, which returns an
// object that we can extract asFragment from. Using this we can use the
// built-in functionality from Jest to perform a snapshot test.

import React from 'react';
import { render, cleanup } from '@testing-library/react';

// component to test
import BackgroundWash from '.';

// should be in setupTests.js?
afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(
    <BackgroundWash
      filterOpts={['to bottom right', 'teal', 'blue', 'purple']}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
