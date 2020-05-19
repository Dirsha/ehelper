import React from "react";

import "./Client.css";

const Client = ({ name, email }) => {
  return (
    <div className="client">
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Client;
