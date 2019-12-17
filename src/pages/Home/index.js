import React, { useEffect, useState, Suspense } from 'react';
import styled from 'styled-components';

// components
import { ErrorBoundary } from 'components/ErrorBoundary';
import { BackgroundWash } from 'components/BackgroundWash';
import { InstagramBackground } from 'components/InstagramBackground';

export const Home = () => {
  const [instagram, setInstagram] = useState('kyliecosmetics');

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
        // filterOpts={['to bottom right', 'darkorange', 'fuchsia', 'darkviolet']}
        // filterOpts={['to bottom right', '#f8ff00', '#3ad59f']}
        // filterOpts={['90deg', '#00C9FF 0%', '#92FE9D 100%']}
        // filterOpts={['90deg', '#f8ff00 0%', '#92FE9D 100%']}
      />
      <Main>
        <Splash>
          <Title>Kylie Cosmetics</Title>
          <Lead>
            Thanks for visiting! Follow us on{' '}
            <Link href={'https://www.instagram.com/' + instagram + '/'}>
              Instagram
            </Link>{' '}
            to get the lastest looks. Check out the page background! Cool right?
          </Lead>
          <Button>{instagram}</Button>
          <WhiteButton>Try my Instagram!</WhiteButton>
        </Splash>
      </Main>
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

const Splash = styled.div`
  position: relative;
  width: 70vw;
  padding-bottom: 10vh;
  // padding-right: 10vw;
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: white;
  font-weight: 300;
`;

const Lead = styled.p`
  font-size: 1.25em;
  color: white;
  font-weight: 300;
`;

const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 1.1em;
  padding: 1em 2em;
  border: 2px solid white;
  border-radius: 3px;
  margin-top: 10px;
`;

const WhiteButton = styled.button`
  background-color: White;
  /* let background bleed through for text */
  mix-blend-mode: lighten
  font-weight: 600;
  font-size: 1.1em;
  padding: 1em 2em;
  border: 2px solid white;
  border-radius: 3px;
  margin-left: 10px;
  margin-top: 10px;
`;

const Link = styled.a`
  text-decoration: none
  color: white;
  font-weight: 700;
`;
