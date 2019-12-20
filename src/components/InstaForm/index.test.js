import React from 'react';
import { render, cleanup } from '@testing-library/react';

// component to test
import { InstaForm } from '.';

describe('InstaForm', () => {
  it('renders', () => {
    // arange

    // act
    const { asFragment } = render(
      <InstaForm input="hello" handler={jest.fn()} />
    );

    // assert
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});
