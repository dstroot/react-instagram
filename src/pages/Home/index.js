import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';

// components
// import InstagramBackground from 'components/InstagramBackground';
import InstagramBackground from 'components/InstagramBackground2';

const Home = ({ app, page }) => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Instagram Background • Home`;
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback="null">
      <Main>
        <InstagramBackground
          username="ferrytalecreative"
          filterOpts={['to bottom right', 'teal', 'blue', 'purple']}
        />
        <Fence>
          <Splash>
            <Title>Ferry Tale Creative</Title>
            <Lead>
              Thanks for visiting us! Follow us on Instagram to get the lastest
              looks. Also check out page background!
            </Lead>
            <Lead>
              Our store will soon be open for business. Until then look around
              and let us know what you think.
            </Lead>
            <Button>@ferrytalecreative</Button>
          </Splash>
          <Spacer />
        </Fence>
      </Main>
    </Suspense>
  );
};

export default Home;

// Styles
const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Fence = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  display: flex;
  // align-items: center;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Splash = styled.div`
  position: relative;
  left: 15vw;
  top: 15vh;
  width: 60vw;
  height: 40vh;
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
