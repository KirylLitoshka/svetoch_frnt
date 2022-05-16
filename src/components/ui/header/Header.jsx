import React from 'react';
import "./Header.css"

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="/">На главную</a>
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