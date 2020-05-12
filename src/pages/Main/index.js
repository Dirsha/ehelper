import React from "react";
import { useDispatch } from "react-redux";

import "./Main.css";
import { addUser, addWedding } from "../../store/actions";

const Main = () => {
  const dispatch = useDispatch();
  const handleClickUser = () => {
    dispatch(addUser);
  };
  const handleClickWedding = () => {
    dispatch(addWedding);
  };
  return (
    <div className="main">
      <h1 className="main-title"> Main </h1>{" "}
      <button onClick={handleClickUser}> Add User! </button>{" "}
      <button onClick={handleClickWedding}> Add Wedding! </button>{" "}
    </div>
  );
};

export default Main;
