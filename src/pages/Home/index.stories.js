import React from 'react';
import { storiesOf } from '@storybook/react';

// component
import { Home } from '.';

storiesOf('Home', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!

      ~~~js
      console.log("hello");
      ~~~
      `,
    },
  })
  .add('show Home', () => <Home />);
