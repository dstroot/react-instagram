import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
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
    //arrange
    fetch.mockResponseOnce(JSON.stringify(data));

    // act (Use the asynchronous version of act to apply resolved promises)
    await act(async () => {
      render(<Home />, container);
    });

    // assert
    expect(container.innerHTML).not.toBeNull();
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('contains the expected text', async () => {
    //arrange
    fetch.mockResponseOnce(JSON.stringify(data));

    // act (Use the asynchronous version of act to apply resolved promises)
    await act(async () => {
      render(<Home />, container);
    });

    // assert
    expect(container.textContent).toContain("Boom! It's kyliecosmetics");
  });
});
