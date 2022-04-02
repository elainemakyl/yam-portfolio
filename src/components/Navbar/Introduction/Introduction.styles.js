import styled, { keyframes } from 'styled-components'

const shakingHand = keyframes`
  0% {
    transform: rotate(0);
  }

  10% {
    transform: rotate(14deg);
  }

  20% {
    transform: rotate(-8deg);
  }

  30% {
    transform: rotate(14deg);
  }

  40% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(0);
  }
`
export const IntroductionWrapper = styled.div`
  padding: 0rem 1rem 14rem;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Name = styled.h2`
  border: 2px solid;
  padding: 2rem 3rem;

  font-weight: 700;
  font-size: 3rem;
  font-family: "Zilla Slab", Arial, Helvetica, sans-serif;

  margin: 0 auto;

`
export const Greetings = styled.p`
  font-family: "Zilla Slab", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin: 1rem 0;
`

export const WaveWrapper = styled.span`
  animation: ${shakingHand} 2.5s infinite;
  transform-orgin: 70% 70%;
  display: inline-block;
  webkit-animation:  ${shakingHand} 2.5s  infinite;
`
