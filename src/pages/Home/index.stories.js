import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "../Home";

storiesOf("Home", module)
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
  .add("show Home", () => <Home />);
