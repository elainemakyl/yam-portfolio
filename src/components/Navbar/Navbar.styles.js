import styled from 'styled-components'

export const NavWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0 64px;
    height: 80px;
    margin: 0 auto;
    align-items: center;
    background-color: hsla(0,0%,100%,.8);
`

export const NavLogo = styled.h1`
    font-size: 20px;
    &: hover{
        cursor: pointer;
    }
`

export const NavHamburgerButton = styled.button`
`

export const NavDarkModeToogleButton = styled.div`
    padding: 8px;
    &: hover {
      cursor: pointer;
    }
`

export const ColorTextSpan = styled.span`
    color: #${props => props.color};
`
