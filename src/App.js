import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Weather from "./components/weather/Weather";
import Retro from "./components/retro/Retro";
import Todo from "./components/todo/Todo";
import "./App.css";

function App() {
  return (
    <Router basename="https://annavasylashko.github.io/spa-weather-retro-todo">
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/retro" component={Retro} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
