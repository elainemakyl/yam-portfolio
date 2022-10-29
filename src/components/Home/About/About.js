import React from 'react';
import {
  AboutContainer,
  ProfilePictureWrapper,
  ProfilePictureBorder,
  ProfilePicture,
  AboutLinks,
  AboutText,
  Link
} from './About.styles';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function About () {
  return (
    <AboutContainer>
      <ProfilePictureWrapper >
        <ProfilePicture />
        <ProfilePictureBorder />
      </ProfilePictureWrapper>

      <AboutText>
        <p style={{ margin: 0 }}>{`Nice to meet you!
    I am a Software Engineer based in Hong Kong🇭🇰 sepcializing in component-driven development, design systems and with a passion for generative art.`}</p>
        <AboutLinks>
          <Link href="https://github.com/elainemakyl" target="_blank"><GitHubIcon sx={{ pr: 2, fontSize: '120%' }}/></Link>
          <Link href="https://www.linkedin.com/in/elainemakyl" target="_blank"><LinkedInIcon sx={{ pr: 2, fontSize: '120%' }}/></Link>
          <Link href="mailto: yilam.mak@gmail.com" ><MailIcon sx={{ pr: 2, fontSize: '120%' }}/></Link>
        </AboutLinks>
      </AboutText>

    </AboutContainer>

  );
}

export default About;
