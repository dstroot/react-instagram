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
    let str = event.target.value;
    
    // input cannot be longer than 30 char
    if (str.length >= 30) {
      return;
    }
    
    // str must be letters, numbers, period, or underscore
    //let exp = new RegExp("^[\w.]+$");
    //if (!exp.test(str)) {
    //  return;
    //}
    
    setInput(event.target.value);
  };
  
  // Regex: anchor it with ^ and $ to make it mean "whole thing" and avoid partial mathching.
  // We can get 'letters/numbers/underscore' with \w+, even inside a character class. "." gives 
  // us the period. Finally we can make use of the i flag to not worry about capitalized letters

  // https://regex101.com/r/47l22K/27

  // ^              # from start
  // ([\w.]          # "\w" is equal to [a-zA-Z0-9_], "." is dot/period
  // +               # "+" matches unlimited times (keep going)
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
