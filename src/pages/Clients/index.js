import React from "react";
import { useSelector } from "react-redux";

import "./Clients.css";

const Clients = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="clients">
      {" "}
      {user && (
        <div>
          <h1> {user.fullName} </h1> <p> {user.id} </p>
        </div>
      )}{" "}
    </div>
  );
};

export default Clients;
