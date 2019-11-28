import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// get data
import { useQuery } from 'react-query';
import { fetchNetlify } from './queries';

// https://gist.github.com/kjintroverted/d67c7f12f68288f6ccf07cbd06fa66a8

export const InstagramBackground = ({ username }) => {
  const [images, setImages] = useState([]);
  const [imageDims, setImageDims] = useState(0);
  const [quality, setQuality] = useState(1);
  const { data, isLoading, error } = useQuery(
    ['photos', { username }],
    fetchNetlify,
    {
      suspense: true,
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
    let prevDimension = imageDims;

    if (!images || !images.length) {
      setImageDims(0);
    } else {
      let dimension = Math.floor(
        Math.sqrt((window.outerHeight * window.outerWidth) / images.length)
      );
      setImageDims(dimension);

      // choose the appropriate image size to download, but if we've
      // already dowmloaded a larger size don't download a smaller one
      if (prevDimension < dimension) {
        let newValue = 0;

        // 0 = 150px
        // 1 = 240px
        // 2 = 320px
        // 3 = 480px
        // 4 = 640px

        if (dimension <= 150) {
          newValue = 0;
        }
        if (dimension > 150 && dimension <= 240) {
          newValue = 1;
        }
        if (dimension > 240 && dimension <= 320) {
          newValue = 2;
        }
        if (dimension > 320 && dimension <= 480) {
          newValue = 3;
        }
        if (dimension > 480 && dimension <= 640) {
          newValue = 4;
        }
        if (dimension > 640) {
          newValue = 4;
        }

        if (newValue > quality) {
          setQuality(newValue);
        }
      }
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
          images.map((image, index) => (
            <Tile key={index}>
              <Post src={image[quality].src} alt="recent post" />
            </Tile>
          ))}
      </Container>
    );
  }

  return null;
};

InstagramBackground.propTypes = {
  /** The username of the Instagram account to use  */
  username: PropTypes.string.isRequired,
};
