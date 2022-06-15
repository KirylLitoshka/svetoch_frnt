import React from 'react';
import RenterItem from "./RenterItem";
import "./RentersList.css";

const RentersList = ({items, modalVisible, setItemID}) => {
    return (
        <div className="renters-list">
            {items.map(item => <RenterItem key={item.id} item={item} modalVisible={modalVisible} setItemID={setItemID}/>)}
        </div>
    );
};

export default RentersList;