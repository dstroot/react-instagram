import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// get data
import { useQuery } from 'react-query';
import { fetchNetlify } from './queries';

// https://gist.github.com/kjintroverted/d67c7f12f68288f6ccf07cbd06fa66a8

const InstagramBackground = ({ username, quality }) => {
  const [images, setImages] = useState(null);
  const [imageDims, setImageDims] = useState(0);
  const { data, isLoading, error } = useQuery(
    ['photos', { username }],
    fetchNetlify,
    {
      // suspense: true,
      retry: 3,
    }
  );

  // loads images from data
  useEffect(() => {
    if (!error && data) {
      const { graphql } = data;
      setImages(
        graphql.user.edge_owner_to_timeline_media.edges.map(
          ({ node }) => node.thumbnail_resources
        )
      );
    }
  }, [data, error]);

  // calculate the width of the tiles
  // https://ryanve.com/lab/dimensions/
  function calcImageDims() {
    if (!images || !images.length) {
      setImageDims(0);
    } else {
      setImageDims(
        Math.floor(
          Math.sqrt((window.outerHeight * window.outerWidth) / images.length)
        )
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

  const Post = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
  `;

  const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
  `;

  if (!error && !isLoading) {
    return (
      <Container data-testid="container">
        {images &&
          images.map(res => (
            <Tile key={res[0].src}>
              <Post src={res[quality || 1].src} alt="recent post" />
            </Tile>
          ))}
      </Container>
    );
  }

  return null;
};

export default InstagramBackground;

InstagramBackground.propTypes = {
  /** The username of the Instagram account to use  */
  username: PropTypes.string.isRequired,
  /** The quality of the images. Range is 0-4. 0 = 150x150, 1 = 240x240, 2 = 320x320, 3 = 480x480, 4 = 640x640. Defaults to 1 */
  quality: PropTypes.number,
};

// Specifies the default values for props:
InstagramBackground.defaultProps = {
  quality: 1,
};
