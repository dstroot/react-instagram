import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const BackgroundWash = ({ filterOpts = [] }) => {
  // creates a color "wash" over the page
  const Filter = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(${filterOpts.join()});
    opacity: 0.7;
  `;

  return <Filter />;
};

BackgroundWash.propTypes = {
  /** Pass a single color or a gradient. Example of gradient: filterOpts={["to bottom right", "teal", "blue", "purple"]} */
  filterOpts: PropTypes.arrayOf(PropTypes.string),
};
