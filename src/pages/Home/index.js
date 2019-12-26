import React, { useEffect, useState, Suspense } from 'react';
import styled from 'styled-components';

// components
import { InstaForm } from 'components/InstaForm';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { BackgroundWash } from 'components/BackgroundWash';
import { InstagramBackground } from 'components/InstagramBackground';

export const Home = () => {
  const [instagram, setInstagram] = useState('kyliecosmetics');

  // set page title
  useEffect(() => {
    document.title = `Instagram Background • Home`;
  });

  return (
    <Main>
      <ErrorBoundary fallback={<></>}>
        <Suspense fallback={<></>}>
          <InstagramBackground username={instagram} />
        </Suspense>
      </ErrorBoundary>
      <BackgroundWash
        filterOpts={['to bottom right', 'teal', 'blue', 'purple']}
        // filterOpts={['to right', '#ff00cc', '#333399']} // some pink
        // filterOpts={['to top right', '#fcb045', '#fd1d1d', '#833ab4']} // instagram
      />
      <Section>
        <Title>
          Boom! It's{' '}
          <Link href={'https://www.instagram.com/' + instagram + '/'}>
            {instagram}
          </Link>
        </Title>
        <p>
          Thanks for visiting! Follow us on{' '}
          <Link href={'https://www.instagram.com/' + instagram + '/'}>
            Instagram
          </Link>{' '}
          to get the lastest looks. Check out the page background! Cool right?
        </p>
        <InstaForm value={instagram} handler={setInstagram} />
      </Section>
    </Main>
  );
};

// Styles
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.div`
  position: relative;
  width: 70vw;
  padding-bottom: 10vh;
  color: white;
  font-weight: 300;
  font-size: calc(0.75em + 1.5vmin);
`;

const Title = styled.h3`
  font-size: calc(1.25em + 2vmin);
  font-weight: 300;
`;

const Link = styled.a`
  text-decoration: none
  color: white;
  font-weight: 500;
`;
