import React, { Component } from "react";
import "./retro.css";
import CardColumn from "./CardColumn/CardColumn";

class Retro extends Component {
  render() {
    return (
      <div className="Retro">
        <CardColumn value="Good things" cardColor="#bb86fc" />
        <CardColumn value="Bad things" cardColor="#ff7597" />
        <CardColumn value="Action items" cardColor="#02ddc5" />
      </div>
    );
  }
}

export default Retro;
