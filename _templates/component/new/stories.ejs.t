---
to: src/components/<%= name %>/index.stories.js
unless_exists: true
---
import React from "react";
import { storiesOf } from "@storybook/react";
import <%= name %> from "../<%= name %>";

storiesOf("<%= name %>", module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!

      ~~~js
      console.log("hello");
      ~~~
      `
    }
  })
  .add("show <%= name %>", () => <<%= name %> name="<%= name %>" />);
