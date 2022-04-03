import React from 'react';
import { NavLogo, NavWrapper, NavDarkModeToogleButton, ColorTextSpan } from './Navbar.styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar () {
  return (
        <NavWrapper>
            <NavLogo>{'elainemakyl '}
                <ColorTextSpan color="ff2e36">.</ColorTextSpan></NavLogo>
            <NavDarkModeToogleButton>
              <DarkModeIcon />
            </NavDarkModeToogleButton>
        </NavWrapper>
  );
}
