import React from 'react';
import "./Header.css"
import Nav from "../navbar/Nav";

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Nav/>
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