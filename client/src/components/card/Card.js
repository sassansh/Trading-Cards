import "./Card.css";

import DetailCard from "../detailcard/DetailCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Card({ card, deleteCard, getCards }) {
  const [showFront, setShowFront] = useState(true);
  function handleDeleteCard() {
    deleteCard(card.id);
  }

  function toggleCard() {
    setShowFront(!showFront);
  }

  if (showFront) {
    return (
      <div className="card">
        <span onClick={handleDeleteCard} className="deleteCard">
          &times;
        </span>
        <img
          src={card.url}
          alt={card.name + " Image"}
          style={{ width: "100%" }}
        />
        <div className="card_container">
          <h4>
            <b>{card.name}</b>
          </h4>
          <p>${Number(card.price).toLocaleString()}</p>
        </div>
        <div className="clickDetails">
          <button className="cleanButton" onClick={toggleCard}>
            <FontAwesomeIcon icon={faAngleRight} /> View Card Details
          </button>
        </div>
      </div>
    );
  }

  if (!showFront) {
    return (
      <div className="card">
        <DetailCard card={card} toggleCard={toggleCard} getCards={getCards} />
      </div>
    );
  }
}

export default Card;
