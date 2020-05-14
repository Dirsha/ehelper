import React from "react";
import { useSelector } from "react-redux";

import "./Partners.css";

const Partners = () => {
  const partner = useSelector((state) => state.partner);
  return (
    <div className="clients">
      <h1>Список подрядчиков</h1>
      <div className="clients">
        {partner && (
          <div>
            <h1> {partner.profession} </h1> <p> {partner.budgets} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
