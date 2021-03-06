import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    const linkStyle = {
      textDecoration: "none",
      color: "#c4c4c4",
    };

    return (
      <nav className="nav">
        <ul className="nav-list">
          <Link to="./weather" style={linkStyle}>
            <li>Weather</li>
          </Link>
          <Link to="./retro" style={linkStyle}>
            <li>Retro</li>
          </Link>
          <Link to="./todo" style={linkStyle}>
            <li>Todo</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
