import React from 'react';
import renderer from 'react-test-renderer';

import ContactForm from '../ContactForm';

test('ContactForm renders some content', () => {
  const component = renderer.create(<ContactForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
