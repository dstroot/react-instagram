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
    setInput(event.target.value);
  };

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
  padding: 1em 2em;
  border: 2px solid white;
  border-radius: 3px;
  margin-top: 10px;
  margin-right: 10px;
  width: 185px;
`;

const WhiteButton = styled.button`
  background-color: White;
  /* let background bleed through for text */
  mix-blend-mode: lighten
  font-weight: 600;
  font-size: 1.1em;
  padding: 1em 3em;
  border: 2px solid white;
  border-radius: 3px;
  margin-top: 10px;
  // width: 200px;
`;
