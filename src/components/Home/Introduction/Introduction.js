import React from 'react';
import { IntroductionWrapper, Name, Greetings, WaveWrapper } from './Introduction.styles';

function Introduction () {
  return (
      <IntroductionWrapper>
        <Greetings>{"Hi, I'm"}</Greetings>
        <Name>Elaine Mak <WaveWrapper>👋👽</WaveWrapper></Name>
        <Greetings>Software Engineer</Greetings>
      </IntroductionWrapper>
  );
}

export default Introduction;
