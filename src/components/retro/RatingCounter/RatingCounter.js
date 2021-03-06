import React from "react";
import "./style.css";
import like from "../img/like.png";
import dislike from "../img/dislike.png";

class RatingCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.onRatingChanged = this.onRatingChanged.bind(this);
  }

  incrementCounter = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
      }),
      () => this.onRatingChanged()
    );
  };

  decrementCounter = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter - 1,
      }),
      () => this.onRatingChanged()
    );
  };

  onRatingChanged() {
    this.props.onRatingChanged(this.state.counter);
  }

  render() {
    return (
      <div className="rating-container">
        <button className="retro-card-like" onClick={this.incrementCounter}>
          <img src={like} alt="likeIcon" />
        </button>

        <p>{this.state.counter}</p>

        <button className="retro-card-dislike" onClick={this.decrementCounter}>
          <img src={dislike} alt="dislikeIcon" />
        </button>
      </div>
    );
  }
}

export default RatingCounter;
