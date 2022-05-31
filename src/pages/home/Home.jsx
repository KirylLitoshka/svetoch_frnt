import React from 'react';
import MenuList from "../../components/menu/MenuList";
import "./Home.css"

const Home = () => {
    const services = [
        {id: 1, name: "renters", alt_name: "Арендаторы"}
    ]

    return (
        <div className="menu">
            <MenuList items={services}/>
        </div>
    );
};

export default Home;