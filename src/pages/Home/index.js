import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';

// components
import BackgroundWash from 'components/BackgroundWash';
import ErrorBoundary from 'components/ErrorBoundary';
import InstagramBackground from 'components/InstagramBackground';

const Home = () => {
  useEffect(() => {
    document.title = `Instagram Background • Home`;
  });

  return (
    <Main>
      <ErrorBoundary>
        <Suspense fallback={<></>}>
          <InstagramBackground username="ferrytalecreative" />
        </Suspense>
      </ErrorBoundary>
      <BackgroundWash
        filterOpts={['to bottom right', 'teal', 'blue', 'purple']}
      />
      <Main>
        <Splash>
          <Title>Ferry Tale Creative</Title>
          <Lead>
            Thanks for visiting us! Follow us on Instagram to get the lastest
            looks. Also check out the page background! Cool right?
          </Lead>
          <Lead>
            Our store will soon be open for business. Until then look around and
            let us know what you think.
          </Lead>
          <Button>@ferrytalecreative</Button>
        </Splash>
      </Main>
    </Main>
  );
};

export default Home;

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
`;
