import React, { Suspense } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

// component to test  https://reactjs.org/docs/testing-recipes.html
import { InstagramBackground } from '.';
import data from './__test__/data.json';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);

  // cleanup mocked fetch
  fetch.resetMocks(); // https://www.npmjs.com/package/jest-fetch-mock
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('InstagramBackground', () => {
  it('calls the right API', async () => {
    // arrange
    fetch.mockResponseOnce(JSON.stringify(data));

    // act (Use the asynchronous version of act to apply resolved promises)
    await act(async () => {
      render(
        <Suspense fallback={<div>Suspended!</div>}>
          <InstagramBackground username="ferrytalecreative" />
        </Suspense>,
        container
      );
    });

    //assert (on the times called and arguments given to fetch)
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      '/.netlify/functions/photos?username=ferrytalecreative'
    );
  });

  it('renders', async () => {
    // arrange
    fetch.mockResponseOnce(JSON.stringify(data));

    // act (Use the asynchronous version of act to apply resolved promises)
    await act(async () => {
      render(
        <Suspense fallback={<div>Suspended!</div>}>
          <InstagramBackground username="ferrytalecreative" />
        </Suspense>,
        container
      );
    });

    // assert (snapshot test)
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
