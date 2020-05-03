import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-menu">
        <li className="header-item">Главная</li>
        <li className="header-item">Все события</li>
        <li className="header-item">Свадьбы</li>
      </ul>
    </div>
  );
};

export default Header;
