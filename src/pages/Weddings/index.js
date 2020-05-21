import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Client from "../../components/Client";
import Form from "../../components/Form";
import { addEvents } from "../../store/actions";

const Weddings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        addEvents.payload = data;
        return addEvents;
      })
      .then((action) => {
        dispatch(action);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const events = useSelector((state) => state.events);

  return (
    <div className="weddings-page">
      <h1>Weddings</h1>
      {events &&
        events.map((item) => {
          return <Client key={item.id} name={item.name} email={item.email} />;
        })}
      <Form buttonTitle={"Добавить ивент"} action={addEvents} />
    </div>
  );
};

export default Weddings;
