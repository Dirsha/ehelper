import React from "react";

import {Link} from "react-router-dom"

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li className="headerLink">
          <Link to "/src/pages/Main">Главная</Link>
        </li>
        <li className="headerLink">
           <Link to "/src/pages/AllEvents">Все мероприятия</Link>
        </li>
        <li className="headerLink">Свадьбы
            <Link to "/src/pages/Weddings">Свадьбы</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
