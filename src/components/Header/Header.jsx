import React from "react";
import './Header.scss';
import {TeliaP} from '@teliads/components/react';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className="telia-navbar">
      <div className="col-2">
        <Logo />
      </div>
      <div className="col-8"></div>
      <div className="col-2 col-2--right">
        <TeliaP variant="subsection">Telia Design System</TeliaP>
      </div>
    </header>
  );
};

export default Header;
