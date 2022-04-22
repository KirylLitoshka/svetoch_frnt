import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="/">На главную</a>
        </div>
      </div>
    </header>
  );
};

export default Header;