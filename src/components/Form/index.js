import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./Form.css";

const Form = ({ buttonTitle, action }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    if (name && email) {
      action.payload = { name, email };
      dispatch(action);
      setName("");
      setEmail("");
    } else {
      alert("Заполните все строки");
    }
  };

  return (
    <div className="form">
      <input
        className="form-input"
        value={name}
        type="text"
        onChange={handleName}
      />
      <input
        className="form-input"
        value={email}
        type="text"
        onChange={handleEmail}
      />
      <button className="form-button" onClick={handleSubmit}>
        {buttonTitle}
      </button>
    </div>
  );
};

export default Form;
