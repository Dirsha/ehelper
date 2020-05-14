import React from "react";

const Client = ({ name, email }) => {
  return (
    <div className="client">
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Client;
