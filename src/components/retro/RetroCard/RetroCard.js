import React from "react";
import RatingCounter from "../RatingCounter/RatingCounter";
import "./style.css";
import trash from "../img/trash.png";

class RetroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
    };

    this.onDeleteCard = this.onDeleteCard.bind(this);
    this.onCardChanged = this.onCardChanged.bind(this);
    this.onCardRatingChanged = this.onCardRatingChanged.bind(this);
  }

  // Delete card

  onDeleteCard() {
    this.props.onDelete(this.props.card.id);
  }

  // Set card rating

  onCardRatingChanged(newRating) {
    let card = this.state.card;
    card.rating = newRating;

    this.setState((state) => ({
      card: card,
    }));

    this.onCardChanged();
  }

  onCardChanged() {
    this.props.onCardChanged(this.state.card);
  }

  // Set card creation date

  currentDate() {
    const cardDate = this.state.card.date;

    let date = cardDate.getDate();
    let month = cardDate.getMonth() + 1;
    let year = cardDate.getFullYear();

    let cardDateString = `${date < 10 ? `0${date}` : `${date}`}/${
      month < 10 ? `0${month}` : `${month}`
    }/${year}`;

    return cardDateString;
  }

  // Set card creation time

  currentTime() {
    const cardDate = this.state.card.date;

    let hour = cardDate.getHours();
    let minute = cardDate.getMinutes();
    let second = cardDate.getSeconds();

    let cardTimeString = `${hour < 10 ? `0${hour}` : `${hour}`}:${
      minute < 10 ? `0${minute}` : `${minute}`
    }:${second < 10 ? `0${second}` : `${second}`}`;

    return cardTimeString;
  }

  render() {
    const cardColor = this.props.cardColor;
    const { onDeleteCard } = this;
    return (
      <div className="retroCard" style={{ borderColor: cardColor }}>
        <p className="retro-card-content">{this.state.card.text}</p>
        <div className="retro-card-options">
          <div className="retro-card-date">
            <p>D: {this.currentDate()}</p>
            <p>T: {this.currentTime()}</p>
          </div>

          <div className="retro-card-btns">
            <RatingCounter onRatingChanged={this.onCardRatingChanged} />
            <button className="retro-card-delete" onClick={onDeleteCard}>
              <img src={trash} alt="trashIcon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RetroCard;
