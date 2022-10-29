import styled from 'styled-components';

export const NavWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    margin: 0 auto;
    align-items: center;
    background-color: hsla(0,0%,100%,.8);
    position: sticky;
    top: 0px;
    backdrop-filter: blur(12px);
    z-index: 999;
`;

export const NavLogo = styled.h1`
    font-size: 20px;
    &: hover{
        cursor: pointer;
    }
`;

export const NavHamburgerButton = styled.button`
`;

export const NavDarkModeToogleButton = styled.div`
    padding: 8px;
    &: hover {
      cursor: pointer;
    }
`;

export const ColorTextSpan = styled.span`
    color: #${props => props.color};
`;
