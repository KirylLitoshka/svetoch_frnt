import React from 'react';
import RenterItem from "./RenterItem";
import "./RentersList.css";

const RentersList = ({items}) => {
    const listHeader = {
        name: "Наименование",
        agreement: "Договор",
        legal_address: "Адрес",
        mail_address: "Почтовый адрес",
        phone: "Телефон"
    }
    return (
        <div className="renters-list">
            <RenterItem item={listHeader}/>
            {items.map(item => <RenterItem key={item.id} item={item}/>)}
        </div>
    );
};

export default RentersList;