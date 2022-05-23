import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">На главную</Link>
        </div>
        {props.currentApp &&
            <div>
              {props.currentApp.alt_name}
            </div>
        }
      </div>
    </header>
  );
};

export default Header;