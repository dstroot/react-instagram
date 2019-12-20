import React, { useState } from 'react';
import styled from 'styled-components';

export const InstaForm = ({ value, handler }) => {
  const [input, setInput] = useState(value);

  const unClick = () => {
    if (document.activeElement !== document.body) {
      document.activeElement.blur();
    }
  };

  const handleChange = event => {
    // input validation
    if (event.target.value.length <= 30) {
      setInput(event.target.value);
    }
  };

  // Regedit to match field
  // ^([\w.-](?!\.(com|net|html?|js|jpe?g|png)$)){5,}$

  // ^              # from start
  // ([\w.-]        # \w is equal to [a-zA-Z0-9_]
  //     (?!\.          # in front can NOT be a dot followed by
  //         (com           # com
  //         |net           # OR net
  //         |html?         # OR htm or html     # ? means optional match
  //         |js            # OR js
  //         |jpe?g         # OR jpg or jpeg
  //         |png           # OR png
  //         )$             # block only if it is at the end
  //     )              # end of the negative lookahead
  // ){5,}          # match at least 5 characters in above conditions
  // $              # till the end

  const handleSubmit = event => {
    event.preventDefault();
    if (input !== '') {
      handler(input);
      unClick(); // remove focus on button
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="instagram"
        type="text"
        required
        value={input}
        onChange={handleChange}
      />
      <WhiteButton type="submit" value="Submit">
        Use my Instagram!
      </WhiteButton>
    </form>
  );
};

// Styles
const Input = styled.input`
  color: white;
  background-color: transparent;
  font-size: 1.1em;
  padding: 1em;
  border: 2px solid white;
  border-radius: 3px;
  margin-top: 10px;
  margin-right: 10px;
  min-width: 220px;
`;

const WhiteButton = styled.button`
  background-color: white;
  /* let background bleed through for text */
  mix-blend-mode: lighten;
  color: blue;
  font-weight: 600;
  font-size: 1.1em;
  padding: 1em;
  border: 2px solid white;
  border-radius: 3px;
  margin-top: 10px;
  // width: 200px;
`;
