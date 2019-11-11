import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// get data
import { useQuery } from 'react-query';
import { fetchInstagram } from '../queries';

// https://gist.github.com/kjintroverted/d67c7f12f68288f6ccf07cbd06fa66a8

const InstagramBackground = ({ username, quality, filterOpts = [] }) => {
  const [images, setImages] = useState(null);
  const [imageDims, setImageDims] = useState(0);
  const { data } = useQuery(['photos', { username }], fetchInstagram, {
    suspense: true,
  });

  // loads images from data
  useEffect(() => {
    const { graphql } = data;
    setImages(
      graphql.user.edge_owner_to_timeline_media.edges.map(
        ({ node }) => node.thumbnail_resources
      )
    );
  }, [data]);

  // calculate the width of the tiles
  function calcImageDims() {
    if (!images || !images.length) setImageDims(0);
    else {
      setImageDims(
        Math.sqrt((window.innerHeight * window.innerWidth) / images.length)
      );
    }
  }

  // updates tile dimensions on image load
  useEffect(calcImageDims, [images]);

  // update tiles when window resizes (with cleanup)
  useEffect(() => {
    window.addEventListener('resize', calcImageDims);

    return function cleanupListener() {
      window.removeEventListener('resize', calcImageDims);
    };
  });

  /**
   * Styles
   */

  // PARENT TILE FOR IMAGES
  const Tile = styled.div`
    width: ${imageDims}px;
    height: ${imageDims}px;
    flex-grow: 1;
  `;

  // CREATES A FILTER OVER TOP
  // NOTE: the way the filter options are working one will always be "wrong".  Should do one or the other depending on what is passed.

  // background-color: to bottom righttealbluepurple; <= Error!
  // background-image: linear-gradient( to bottom right,teal,blue,purple );

  const Filter = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${filterOpts}; /* USED IF ONE COLOR PASSED */
    background-image: linear-gradient(
      ${filterOpts.join()}
    ); /* USED IF GRADIENT OPTS PASSED */
    opacity: 0.7;
  `;

  const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
  `;

  const Post = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
  `;

  return (
    <Container>
      {images &&
        images.map(res => (
          <Tile key={res[0].src}>
            <Post src={res[quality || 1].src} alt="recent post" />
          </Tile>
        ))}
      <Filter />
    </Container>
  );
};

export default InstagramBackground;

InstagramBackground.propTypes = {
  /** The username of the Instagram account to use  */
  username: PropTypes.string.isRequired,
  /** The quality of the images. Range is 0-4. 0 = 150x150, 1 = 240x240, 2 = 320x320, 3 = 480x480, 4 = 640x640. Defaults to 1 */
  quality: PropTypes.number,
  /** Pass a single color or a gradient. Example of gradient: filterOpts={["to bottom right", "teal", "blue", "purple"]} */
  filterOpts: PropTypes.arrayOf(PropTypes.string),
};

// Specifies the default values for props:
InstagramBackground.defaultProps = {
  quality: 1,
};
