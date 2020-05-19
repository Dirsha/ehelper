import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addClientsFromServer } from "../../store/actions";
import "../../components/Client";
import "./Clients.css";
import Client from "../../components/Client";

const Clients = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        addClientsFromServer.payload = data;
        return addClientsFromServer;
      })
      .then((action) => {
        dispatch(action);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const clients = await fetch("https://jsonplaceholder.typicode.com/users");
  //     console.log(clients);
  //   };
  //   fetchData();
  //   return () => {
  //     alert("unmounting");
  //   };
  // }, []);

  const clients = useSelector((state) => state.clients);

  return (
    <div className="clients">
      {clients &&
        clients.map((item) => {
          return <Client key={item.id} name={item.name} email={item.email} />;
        })}
    </div>
  );
};

export default Clients;
