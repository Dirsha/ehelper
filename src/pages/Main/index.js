import React from "react";
import { useDispatch } from "react-redux";

import "./Main.css";
import { addUser, addWedding, addPartner } from "../../store/actions";

const Main = () => {
  const dispatch = useDispatch();
  const handleClickUser = () => {
    dispatch(addUser);
  };
  const handleClickWedding = () => {
    dispatch(addWedding);
  };
  const handleClickPartner = () => {
    dispatch(addPartner);
  };

  return (
    <div className="main">
      <h1 className="main-title"> Main </h1>
      <button onClick={handleClickUser}>Add User!</button>
      <button onClick={handleClickWedding}>Add Wedding!</button>
      <button onClick={handleClickPartner}>Add Partner!</button>
    </div>
  );
};

export default Main;
