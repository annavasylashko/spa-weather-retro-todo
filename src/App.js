import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Weather from "./components/weather/Weather";
import Retro from "./components/retro/Retro";
import Todo from "./components/todo/Todo";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/weather" component={Weather} />
        <Route path="/retro" component={Retro} />
        <Route path="/todo" component={Todo} />
      </div>
    </Router>
  );
}

export default App;
