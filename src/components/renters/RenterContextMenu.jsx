import React from 'react';
import "./RenterContextMenu.css"
import {Link} from "react-router-dom";

const RenterContextMenu = ({itemID}) => {
    return (
        <div className="modal-menu">
            <div className="modal-menu_link">
                <Link to="asd" state={{itemID: itemID}}>Объекты</Link>
            </div>
            <div className="modal-menu_link">
                <Link to="qwe" state={{itemID: itemID}}>Начисление</Link>
            </div>
            <div className="modal-menu_link">
                <Link to="zxc" state={{itemID: itemID}}>Просто строка</Link>
            </div>
        </div>
    );
};

export default RenterContextMenu;