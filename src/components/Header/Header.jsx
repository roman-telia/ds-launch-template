import React from "react";
import './Header.scss';
import {TeliaIcon, TeliaP} from '@teliads/components/react';

const Header = () => {
  return (
    <header className="telia-navbar">
      <div className="col-2">
        <TeliaIcon name="telia" color="white" /> Telia
      </div>
      <div className="col-8"></div>
      <div className="col-2">
        <TeliaP variant="subsection">Telia Design System</TeliaP>
      </div>
    </header>
  );
};

export default Header;
