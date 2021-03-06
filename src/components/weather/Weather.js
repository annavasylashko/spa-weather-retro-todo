import React, { Component } from "react";
import "./weather.css";
import WeekContainer from "./WeekContainer/WeekContainer";

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <WeekContainer />
      </div>
    );
  }
}

export default Weather;
