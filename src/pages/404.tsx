import styled from '@emotion/styled';
import { NextPage } from 'next';

import Container from '@/common/components/elements/Container';

const Custom404: NextPage = () => {
  return (
    <Container
      className='flex flex-col h-full justify-center items-center space-y-5 py-40 md:py-20'
      data-aos='fade-up'
    >
      <StyledHeading title='404' className='font-bold text-7xl font-sora'>
        404
      </StyledHeading>
      <h2 className='text-xl lg:text-xl animate-pulse text-center'>
        Whoops, there doesn&apos;t seem to be anything here!
      </h2>
    </Container>
  );
};

export default Custom404;

const StyledHeading = styled.h1`
  animation: glitch 1s linear infinite;

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  &:before,
  &:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before {
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  &:after {
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
  }
`;
