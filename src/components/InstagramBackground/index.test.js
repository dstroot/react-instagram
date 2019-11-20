import React, { Suspense } from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';

// component to test
import InstagramBackground from '.';
import data from './__mocks__/data.json';

// automatically unmount and cleanup DOM after each test is finished.
afterEach(cleanup);

describe('InstagramBackground', () => {
  // cleanup mocks
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('it renders with suspense', async () => {
    fetch.mockResponseOnce(data);

    // const { getByTestId } = render(
    //   <Suspense fallback={<div>Not Rendered Yet</div>}>
    //     <InstagramBackground username="ferrytalecreative" />
    //   </Suspense>
    // );
    // const element = await waitForElement(() => getByTestId('container'));
    // expect(element.toMatchSnapshot());

    const { asFragment } = await waitForElement(() =>
      render(
        <Suspense fallback={<div>Not Rendered Yet</div>}>
          <InstagramBackground username="ferrytalecreative" />
        </Suspense>
      )
    );

    // assert the snapshot matches
    expect(asFragment()).toMatchSnapshot();

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      '/.netlify/functions/photos?username=ferrytalecreative'
    );
  });
});

/**
 * Custom matchers:
 *   - toBeDisabled
 *   - toBeEnabled
 *   - toBeEmpty
 *   - toBeInTheDocument
 *   - toBeInvalid
 *   - toBeRequired
 *   - toBeValid
 *   - toBeVisible
 *   - toContainElement
 *   - toContainHTML
 *   - toHaveAttribute
 *   - toHaveClass
 *   - toHaveFocus
 *   - toHaveFormValues
 *   - toHaveStyle
 *   - toHaveTextContent
 */

/**
  * Based on the Guiding Principles, your test should resemble how users
  * interact with your code (component, page, etc.) as much as possible.
  * With this in mind, we recommend this order of priority:

  * Queries Accessible to Everyone queries that reflect the experience
  * of visual/mouse users as well as those that use assistive technology
  *
  * **getByLabelText**: Only really good for form fields, but this is the
  * number one method a user finds those elements, so it should be your top preference.
  *
  * **getByPlaceholderText**: A placeholder is not a substitute for a label. But if
  * that's all you have, then it's better than alternatives.
  *
  * getByText: Not useful for forms, but this is the number 1 method a user
  * finds other elements (like buttons to click), so it should be your top
  * preference for non-form elements.
  *
  * getByDisplayValue: The current value of a form element can be useful when
  * navigating a page with filled-in values.
  *
  * Semantic Queries HTML5 and ARIA compliant selectors. Note that the user
  * experience of interacting with these attributes varies greatly across
  * browsers and assistive technology.
  *
  * **getByAltText**: If your element is one which supports alt text (img, area,
  * and input), then you can use this to find that element.
` *`
  * **getByTitle**: The title attribute is not consistently read by screenreaders,
  * and is not visible by default for sighted users.
  *
  * **getByRole**: This can be used to select dialog boxes and other
  * difficult-to-capture elements in a more semantic way
  *
  * Test IDs
  *
  * **getByTestId**: The user cannot see (or hear) these, so this is only
  * recommended for cases where you can't match by text or it doesn't make
  * sense (the text is dynamic).
  */
