import React from "react";

import "../MenuItem";

import "./Header.css";
import MenuItem from "../MenuItem";

const Header = () => {
  return (
    <div className="header">
      <MenuItem menuItemName="Главная" />
      <MenuItem menuItemName="Все мероприятия" />
      <MenuItem menuItemName="Свадьбы" />
    </div>
  );
};

export default Header;
