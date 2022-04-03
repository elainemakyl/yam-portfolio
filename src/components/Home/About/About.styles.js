import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  algin-items: flex-start;
`;

export const ProfilePictureWrapper = styled.div`
  margin: 0 auto;
  position:relative;
  width: 15rem;
  height: 15rem;
`;

export const ProfilePicture = styled.img.attrs({
  src: './profile_picture.jpeg'
})`
width:15rem;
height: 15rem;
display: inline-block;
margin: 0 auto;
`;

export const ProfilePictureBorder = styled.div`
  position: absolute;
  border: 1px dashed black;
  width: 100%;
  height: 100%;
  top: 10px;
  left: 10px;
  z-index:-999;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-family: "Rubik", Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 0 4rem;
`;
