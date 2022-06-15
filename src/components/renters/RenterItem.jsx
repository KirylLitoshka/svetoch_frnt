import React from 'react';
import "./RenterItem.css"

const RenterItem = ({item, modalVisible, setItemID}) => {
    return (
        <div className="renter-item" onClick={() => {
            modalVisible(true)
            setItemID(item.id)}
        }
        >
            {/*{Object.entries(item).map((item, index) => <div key={index}>{item.}</div>)}*/}
            <div className="renters-item_field">
                {item.name}
            </div>
            <div className="renters-item_field">
                {item.agreement}
            </div>
            <div className="renters-item_field">
                {item.legal_address}
            </div>
            <div className="renters-item_field">
                {item.mail_address}
            </div>
            <div className="renters-item_field">
                {item.phone}
            </div>
            <div className="renters-item_field">
                control panel
            </div>
        </div>
    );
};

export default RenterItem;