import React from 'react';
import { AboutContainer, ProfilePictureWrapper, ProfilePictureBorder, Paragraph, ProfilePicture } from './About.styles';
function About () {
  return (
    <AboutContainer>
      <ProfilePictureWrapper >
        <ProfilePicture/>
      <ProfilePictureBorder/>

      </ProfilePictureWrapper>
      <Paragraph>{`Nice to meet you!
    I am a Software Engineer based in Hong Kong🇭🇰 sepcializing in component-driven development, design systems and with a passion for generative art.`}</Paragraph>
    </AboutContainer>

  );
}

export default About;
