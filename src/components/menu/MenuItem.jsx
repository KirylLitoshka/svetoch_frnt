import React from "react";
import "./MenuItem.css";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-list__item">
      <Link to={`${item.name}`} className="menu-list__link">
        {item.alt_name}
      </Link>
    </div>
  );
};

export default MenuItem;
