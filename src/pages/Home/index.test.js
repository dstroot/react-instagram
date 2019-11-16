import React from 'react';
import { render, cleanup } from '@testing-library/react';

// component to test
import Home from '.';

// automatically unmount and cleanup DOM after each test is finished.
afterEach(cleanup);

// test the component
describe('Test component Home:', () => {
  it('it should render', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('it should contain the expected text', () => {
    const { getByText } = render(<Home />);
    const element = getByText(`Ferry Tale Creative`, { exact: false });
    expect(element).toBeInTheDocument();
  });
});
