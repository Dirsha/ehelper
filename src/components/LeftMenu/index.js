import React from "react";
import { Link } from "react-router-dom";

import "./LeftMenu.css";

const LeftMenu = () => {
  return (
    <div className="leftmenu">
      <ul className="leftmenu-link-box">
        <li className="leftmenu-link">
          <Link className="leftmenu-link-item" to="/">
            Главная
          </Link>
        </li>
        <li className="leftmenu-link">
          <Link className="leftmenu-link-item" to="/calendar">
            Календарь
          </Link>
        </li>
        <li className="leftmenu-link">
          <Link className="leftmenu-link-item" to="/clients">
            Клиенты
          </Link>
        </li>
        <li className="leftmenu-link">
          <Link className="leftmenu-link-item" to="/partners">
            Подрядчики
          </Link>
        </li>
        <li className="leftmenu-link">
          <Link className="leftmenu-link-item" to="/tasks">
            Задачи
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
