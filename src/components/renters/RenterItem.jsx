import React from 'react';
import "./RenterItem.css"

const RenterItem = ({item}) => {
    return (
        <div className="renter-item">
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
        </div>
    );
};

export default RenterItem;