import React from "react";
import "./style.css";

class NewCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.changeText = this.changeText.bind(this);
    this.onAddCard = this.onAddCard.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  // New card content

  changeText(event) {
    this.setState(() => ({
      value: event.target.value,
    }));
  }

  // Check if new card content is empty

  validate(text) {
    return text.trim().length > 0;
  }

  // Create new card

  onAddCard() {
    if (this.validate(this.state.value)) {
      let body = this.state.value;
      let date = new Date();

      let newCard = {
        id: performance.now(),
        text: body,
        date: date,
        rating: 0,
      };

      this.props.onSubmit(newCard);

      this.setState({
        value: "",
      });

      return;
    }

    alert("Input value didn't pass validation");
  }

  // Add card creation on key "Enter"

  onEnter(event) {
    if (event.charCode === 13) {
      this.onAddCard();
    }
  }

  render() {
    const { changeText, onAddCard, onEnter } = this;
    const { value } = this.state;
    return (
      <div className="newCard">
        <input
          type="text"
          value={value}
          className="new-card-input"
          onChange={changeText}
          onKeyPress={onEnter}
          placeholder="Add description..."
          autofocus="true"
        />
        <button className="new-card-btn" onClick={onAddCard}>
          +
        </button>
      </div>
    );
  }
}

export default NewCard;
