import React from 'react';
import { render, cleanup } from '@testing-library/react';

// component to test
import Home from '../Home';

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

/**

Component Contracts
--------------------------------------------------------------------
In order to test a component you must first understand what its
Contract is. Understanding a component’s contract is the most important
part of testing a React component. A contract defines the expected behavior
of your component and what assumptions are reasonable to have about its
usage. Without a clear contract, your component may be hard to understand.
Writing tests is a great way to formally define your component’s contract.

Every React component has at least one thing that contributes to the
definition of its contract:

- What it renders (which may be nothing)

Additionally, most component contracts are affected by these things as well:

- The props the component receives
- The state the component holds (if any)
- What the component does when the user interacts with it  (via clicking,
  dragging, keyboard input, etc)


Guiding Principles
--------------------------------------------------------------------

Your test should resemble how users interact with your code (component, page, etc.)
as much as possible. With this in mind, we recommend this order of priority:

**getByText**: Not useful for forms, but this is the number 1 method a user
finds other elements (like buttons to click), so it should be your top
preference for non-form elements.

**getByLabelText**: Only really good for form fields, but this is the
number one method a user finds those elements, so it should be your top preference.

**getByPlaceholderText**: A placeholder is not a substitute for a label. But if
that's all you have, then it's better than alternatives.

**getByDisplayValue**: The current value of a form element can be useful when
navigating a page with filled-in values.

Semantic Queries HTML5 and ARIA compliant selectors. Note that the user
experience of interacting with these attributes varies greatly across
browsers and assistive technology.

**getByAltText**: If your element is one which supports alt text (img, area,
and input), then you can use this to find that element.

**getByTitle**: The title attribute is not consistently read by screenreaders,
and is not visible by default for sighted users.

**getByRole**: This can be used to select dialog boxes and other
difficult-to-capture elements in a more semantic way

Test IDs

**getByTestId**: The user cannot see (or hear) these, so this is only
recommended for cases where you can't match by text or it doesn't make
sense (the text is dynamic).

Custom matchers:
--------------------------------------------------------------------
  - toBeDisabled
  - toBeEnabled
  - toBeEmpty
  - toBeInTheDocument
  - toBeInvalid
  - toBeRequired
  - toBeValid
  - toBeVisible
  - toContainElement
  - toContainHTML
  - toHaveAttribute
  - toHaveClass
  - toHaveFocus
  - toHaveFormValues
  - toHaveStyle
  - toHaveTextContent


React testing library
--------------------------------------------------------------------
https://testing-library.com/docs/react-testing-library/intro
https://github.com/kentcdodds/react-testing-library-examples


Jest information
--------------------------------------------------------------------
Jest - Expect: https://jestjs.io/docs/en/expect
Jest cheatsheet - https://github.com/sapegin/jest-cheat-sheet

 */
