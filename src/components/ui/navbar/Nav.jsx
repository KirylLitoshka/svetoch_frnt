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
                    <span className="nav-list_link">Справочники</span>
                    <div className="nav-list_item-submenu">
                        <Link to="catalogues/meters" className="nav-list_link"> Счетчики</Link>
                        <Link to="#" className="nav-list_link"> subcontent2</Link>
                        <Link to="#" className="nav-list_link"> subcontent3</Link>
                    </div>
                </li>
                <li className="nav-list_item">
                    <span className="nav-list_link">content 2</span>
                </li>
                <li className="nav-list_item">
                    <span className="nav-list_link">content 3</span>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;