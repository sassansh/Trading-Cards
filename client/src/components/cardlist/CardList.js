import "./CardList.css";

import Card from "../card/Card";

function CardList({ cards, sortBy, deleteCard, getCards, electricOnly }) {
  function handleSort(cards) {
    const newCards = [...cards];
    if (sortBy === "price") {
      return newCards.sort((a, b) =>
        parseInt(a.price) > parseInt(b.price) ? 1 : -1
      );
    }
    if (sortBy === "name") {
      return newCards.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    }
    return newCards;
  }

  if (cards.length > 0) {
    return (
      <div className="cardList">
        {handleSort(cards).map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              deleteCard={deleteCard}
              getCards={getCards}
            />
          );
        })}
      </div>
    );
  } else {
    return <div className="noCards cardList">No cards to show 😕</div>;
  }
}

export default CardList;
