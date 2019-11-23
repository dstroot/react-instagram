import React from 'react';
import styled from 'styled-components';

// components
import { InstagramBackground } from '.';

export default {
  title: 'Pac Life/Instagram Background',
  component: InstagramBackground,
};

export const example = () => {
  return (
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
            Our store will soon be open for business. Until then look around and
            let us know what you think.
          </Lead>
          <Button>@ferrytalecreative</Button>
        </Splash>
        <Spacer />
      </Fence>
    </Main>
  );
};

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
  align-items: center;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Splash = styled.div`
  position: relative;
  left: 100px;
  width: 40vw;
  height: 50vh;
`;

const Title = styled.h1`
  font-size: 4em;
  color: white;
  font-weight: 300;
`;

const Lead = styled.p`
  font-size: 1.25em;
  color: white;
  font-weight: 300;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  color: white;
  background-color: transparent;
  font-size: 1em;
  padding: 0.5em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;
