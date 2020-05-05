import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AllEvents from "./pages/AllEvents";
import Main from "./pages/Main";
import Weddings from "./pages/Weddings";
import MainTemplate from "./templates/MainTemplate";
import Calendar from "./pages/Calendar";
import Clients from "./pages/Clients";
import Partners from "./pages/ Partners";
import Tasks from "./pages/Tasks";

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
          <Route path="/calendar">
            <MainTemplate>
              <Calendar />
            </MainTemplate>
          </Route>
          <Route path="/clients">
            <MainTemplate>
              <Clients />
            </MainTemplate>
          </Route>
          <Route path="/partners">
            <MainTemplate>
              <Partners />
            </MainTemplate>
          </Route>
          <Route path="/tasks">
            <MainTemplate>
              <Tasks />
            </MainTemplate>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
