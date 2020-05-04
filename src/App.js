import React from "react";

import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
