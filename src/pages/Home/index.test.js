import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// import { render } from '@testing-library/react';
import pretty from 'pretty';

// component to test
import { Home } from '.';
import data from 'components/InstagramBackground/__test__/data.json';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);

  // cleanup mocked fetch
  fetch.resetMocks();
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Test page Home:', () => {
  it('renders', async () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<Home />, container);
    });

    // snapshot test
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('contains the expected text', async () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<Home />, container);
    });

    expect(container.textContent).toContain('Ferry Tale Creative');
  });
});
