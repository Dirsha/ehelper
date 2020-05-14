import React, { useEffect, useState } from "react";
//import { useSelector } from "react-redux";

import "../../components/Client";
import "./Clients.css";
import Client from "../../components/Client";

const Clients = () => {
  const [clients, setClients] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setClients(data);
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
