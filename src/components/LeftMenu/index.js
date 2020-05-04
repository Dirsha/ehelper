import React from "react";

import "./LeftMenu.css";
import MenuItem from "../MenuItem";

const LeftMenu = () => {
  return (
    <div className="leftmenu">
      <MenuItem menuItemName="Календарь дат" />
      <MenuItem menuItemName="Список клиентов" />
      <MenuItem menuItemName="Список подрядчиков" />
      <MenuItem menuItemName="Список задач" />
      <MenuItem menuItemName="Рейтинг" />
    </div>
  );
};
export default LeftMenu;
