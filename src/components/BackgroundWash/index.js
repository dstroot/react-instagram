import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

export const BackgroundWash = ({ filterOpts = [] }) => {
  // creates an animated color "wash" over the page
  const backgroundAnimation = keyframes`
    0% { background-position: 25% 0%; }
    50% { background-position: 76% 100%; }
    100% { background-position: 25% 0%; }
  `;

  const Filter = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(${filterOpts.join()});
    opacity: 0.6;
    background-size: 400% 400%;
    animation: ${backgroundAnimation} 10s ease infinite;
  `;

  return <Filter />;
};

BackgroundWash.propTypes = {
  /** Pass a single color or a gradient. Example of gradient: filterOpts={["to bottom right", "teal", "blue", "purple"]} */
  filterOpts: PropTypes.arrayOf(PropTypes.string),
};
