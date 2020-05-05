import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AllEvents from "./pages/AllEvents";
import Main from "./pages/Main";
import Weddings from "./pages/Weddings";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainTemplate>
              <Main />
            </MainTemplate>
          </Route>
          <Route path="/allevents">
            <MainTemplate>
              <AllEvents />
            </MainTemplate>
          </Route>
          <Route path="/weddings">
            <MainTemplate>
              <Weddings />
            </MainTemplate>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
