import React from 'react';
import { NavLogo, NavWrapper, NavDarkModeToogleButton } from './Navbar.styles';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';

export default function Navbar() {

    return (
        <NavWrapper>
            <NavLogo>elainemakyl</NavLogo>
            <NavDarkModeToogleButton><DarkModeTwoToneIcon /></NavDarkModeToogleButton>

        </NavWrapper>
    )

}