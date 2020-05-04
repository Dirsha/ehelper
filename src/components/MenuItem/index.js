import React from "react";

import "./MenuItem.css";

const MenuItem = ({ menuItemName }) => {
  return (
    <div className="menuItem">
      <p className="menuItem-name">{menuItemName}</p>
    </div>
  );
};

export default MenuItem;
