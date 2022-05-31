import React from 'react';
import "./Nav.css"
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list_item">
                    <Link to="/" className="nav-list_link">На главную</Link>
                </li>
                <li className="nav-list_item">
                    <a className="nav-list_link">content 1</a>
                    <div className="nav-list_item-submenu">
                        <Link to="#" className="nav-list_link"> subcontent1</Link>
                        <Link to="#" className="nav-list_link"> subcontent2</Link>
                        <Link to="#" className="nav-list_link"> subcontent3</Link>
                    </div>
                </li>
                <li className="nav-list_item">
                    <a className="nav-list_link">content 2</a>
                </li>
                <li className="nav-list_item">
                    <a className="nav-list_link">content 3</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;