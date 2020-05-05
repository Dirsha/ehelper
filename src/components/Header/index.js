import React from "react";

import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-menu">
        <li className="header-link">
          <Link className="header-link-item" to="/">
            Главная
          </Link>
        </li>
        <li className="header-link">
          <Link className="header-link-item" to="/allevents">
            Все мероприятия
          </Link>
        </li>
        <li className="header-link header-link--red">
          <Link className="header-link-item" to="/weddings">
            Свадьбы
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
