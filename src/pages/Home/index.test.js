import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

// component to test
import Home from '.';
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

describe('Test component Home:', () => {
  it('renders', async () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<Home />, container);
    });

    // snapshot test
    expect(pretty(container.innerHTML)).toMatchSnapshot();

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      '/.netlify/functions/photos?username=ferrytalecreative'
    );
  });
});
