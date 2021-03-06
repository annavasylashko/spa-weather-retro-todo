import React from "react";
import "./style.css";
import RetroCard from "../RetroCard/RetroCard";
import NewCard from "../NewCard/NewCard";

class CardColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isAddingNewCard: false,
    };

    this.createCard = this.createCard.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.showInput = this.showInput.bind(this);
    this.onCardChanged = this.onCardChanged.bind(this);
    this.sortList = this.sortList.bind(this);
  }

  // Append card into list

  createCard(card) {
    this.setState((state) => ({
      list: [...state.list, card],
      isAddingNewCard: false,
    }));

    this.sortList();
  }

  // Delete card

  onDelete(id) {
    this.setState({
      list: this.state.list.filter((element) => element.id !== id),
    });
  }

  // Show input on add button click

  showInput() {
    this.setState({ isAddingNewCard: true });
  }

  // Update card

  onCardChanged(cardToChange) {
    let index = this.state.list.findIndex(
      (card) => card.id === cardToChange.id
    );

    if (index !== -1) {
      let listCopy = this.state.list;
      listCopy[index] = cardToChange;

      this.setState((state) => ({
        list: listCopy,
      }));
    }
  }

  // Sort Cards in list by rating

  sortList() {
    this.setState((state) => ({
      list: state.list.sort(function (a, b) {
        return b.rating - a.rating;
      }),
    }));
  }

  render() {
    const { createCard, onDelete, showInput, onCardChanged } = this;
    const { list } = this.state;
    const cardColor = this.props.cardColor;

    return (
      <div className="container">
        <div className="container-top">
          <h1 style={{ color: cardColor }}>{this.props.value}</h1>
          <div className="card-count">{list.length}</div>
        </div>
        {this.state.isAddingNewCard === false && (
          <button className="add-card" onClick={showInput}>
            + Write note
          </button>
        )}
        {this.state.isAddingNewCard === true && (
          <NewCard onSubmit={createCard} />
        )}
        <div className="card-container">
          {list.map((card) => (
            <RetroCard
              key={card.id}
              card={card}
              cardColor={cardColor}
              onDelete={onDelete}
              onCardChanged={onCardChanged}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardColumn;
