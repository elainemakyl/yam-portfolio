import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
   
  padding: 0 5rem;
  max-width: 96rem;
  margin: 0 auto;

  @media screen and (max-width:1000px) {
    padding: 0;
  }

  @media screen and (max-width:800px) {
    flex-direction: column;
  }
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

export const AboutLinks = styled.div`
    display: flex;
    margin-top: 1rem;

    @media screen and (max-width: 800px ) {
      justify-content: center;
    }
`;

export const AboutText = styled.div`
  padding: 0 4rem;

  font-size: 1.75rem;
  font-family: "Rubik", Arial, Helvetica, sans-serif;
  font-weight: bold;
    
  line-height:30px;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    padding: 0 1rem;
    margin: 2rem auto;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #78697c;
  transition: 0.3s all ease-in;

  &:hover {
    color: #6756be; 
  }
`;
