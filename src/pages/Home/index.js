import React, { useEffect, useState, Suspense } from 'react';
import styled from 'styled-components';

// components
import { InstaForm } from 'components/InstaForm';
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

      <Section>
        <Title>
          Boom! It's{' '}
          <Link href={'https://www.instagram.com/' + instagram + '/'}>
            {instagram}
          </Link>
        </Title>
        <Lead>
          Thanks for visiting! Follow us on{' '}
          <Link href={'https://www.instagram.com/' + instagram + '/'}>
            Instagram
          </Link>{' '}
          to get the lastest looks. Check out the page background! Cool right?
        </Lead>
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
`;

const Title = styled.h3`
  // font-size: 3.5em;
  font-size: calc(2.25em + 2vmin);
  color: white;
  font-weight: 300;
`;

const Lead = styled.p`
  // font-size: 1.25em;
  font-size: calc(0.5em + 2vmin);
  color: white;
  font-weight: 300;
`;

const Link = styled.a`
  text-decoration: none
  color: white;
  font-weight: 700;
`;
