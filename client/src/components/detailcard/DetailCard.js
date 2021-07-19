import "./DetailCard.css";

import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function DetailCard({ card, toggleCard, getCards }) {
  const [editMode, setEditMode] = useState(false);
  const [engine, setEngine] = useState(card.engine);
  const cardNameRef = useRef();
  const cardUrlRef = useRef();
  const cardPriceRef = useRef();

  const renderEditButton = () => {
    if (editMode) {
      return (
        <button
          className="editbuttons"
          type="button"
          onClick={cancelEditButtonHandler}
        >
          Cancel
        </button>
      );
    } else {
      return (
        <button
          className="editbuttons"
          type="button"
          onClick={editButtonHandler}
        >
          Edit
        </button>
      );
    }
  };

  const renderDetailsOrEdit = () => {
    if (editMode) {
      return (
        <form>
          {/* Car Name */}
          <div className="row">
            <label>Car Name</label>

            <input defaultValue={card.name} type="text" ref={cardNameRef} />
          </div>
          {/* Car Image URL */}
          <div className="row">
            <label>Car Image URL</label>
            <input defaultValue={card.url} type="url" ref={cardUrlRef} />
          </div>
          {/* Car Price */}
          <div className="row">
            <label>Car Price</label>
            <input defaultValue={card.price} type="number" ref={cardPriceRef} />
          </div>
          {/* Car Engine */}
          <div className="row">
            <label>Car Engine:</label>
            <select value={engine} onChange={handleEngine}>
              <option value="Electric">Electric</option>
              <option value="Gas">Gas</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="row">
            <button
              onClick={editCard}
              className="editbuttons submitButton"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <p>
            <b>Car Name:</b> {card.name}
          </p>
          <p>
            <b>Price:</b> ${Number(card.price).toLocaleString()}
          </p>
          <p>
            <b>Engine Type:</b> {card.engine}{" "}
            {card.engine === "Electric" ? "⚡️" : ""}
            {card.engine === "Gas" ? "⛽️" : ""}
          </p>
        </div>
      );
    }
  };

  function editCard() {
    const name = cardNameRef.current.value;
    const url = cardUrlRef.current.value;
    const price = cardPriceRef.current.value;
    const payload = { name: name, url: url, engine: engine, price: price };
    if (validateForm(name, url, price)) {
      console.log(card.id, name, url, engine, price);
      axios.patch(`/api/cards/${card.id}`, payload).then(() => {
        setEditMode(false);
        getCards();
      });
    }
  }

  function handleEngine(event) {
    setEngine(event.target.value);
  }

  function validateForm(name, url, price) {
    if (name.length === 0 || url.length === 0 || price.length === 0) {
      alert("Please fill out all fields including Name, Image URL, and Price!");
      return false;
    } else if (!url.startsWith("https://") && !url.startsWith("https://")) {
      alert("Please enter a valid Image URL!");
    } else {
      return true;
    }
  }

  function editButtonHandler() {
    setEditMode(true);
  }

  function cancelEditButtonHandler() {
    setEditMode(false);
  }

  const renderSeeLess = () => {
    if (editMode) {
      return null;
    } else {
      return (
        <div className="clickDetails footer">
          <button className="cleanButton" onClick={toggleCard}>
            <FontAwesomeIcon icon={faAngleRight} /> See Less
          </button>
        </div>
      );
    }
  };

  return (
    <div className="card_container">
      <h3>
        <b>Card Details</b>
      </h3>
      {renderDetailsOrEdit()}
      {renderEditButton()}
      {renderSeeLess()}
    </div>
  );
}

export default DetailCard;
