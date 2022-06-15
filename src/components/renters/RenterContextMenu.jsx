import React from 'react';
import "./RenterContextMenu.css"
import {Link} from "react-router-dom";

const RenterContextMenu = ({itemID}) => {
    return (
        <React.Fragment>
            <div className="context-menu">
                <Link to="asd" state={{itemID: itemID}}>Объекты</Link>
            </div>
            <div className="context-menu">
                <Link to="qwe" state={{itemID: itemID}}>Начисление</Link>
            </div>
            <div className="context-menu">
                <Link to="zxc" state={{itemID: itemID}}>Просто строка</Link>
            </div>
        </React.Fragment>
    );
};

export default RenterContextMenu;