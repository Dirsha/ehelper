import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/allevents">
            <AllEvents />
          </Route>
          <Route path="/weddings">
            <Weddings />
          </Route>
        </Switch>
      </Router>

      <Header />
    </div>
  );
}

export default App;
