import "./Form.css";
import { useRef, useState } from "react";

function Form({ addCard }) {
  const [engine, setEngine] = useState("Electric");
  const cardNameRef = useRef();
  const cardUrlRef = useRef();
  const cardPriceRef = useRef();

  function clearForm() {
    cardNameRef.current.value = null;
    cardUrlRef.current.value = null;
    cardPriceRef.current.value = null;
  }

  function handleAddCard() {
    const name = cardNameRef.current.value;
    const url = cardUrlRef.current.value;
    const price = cardPriceRef.current.value;
    if (validateForm(name, url, price)) {
      addCard(name, url, engine, price);
      clearForm();
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

  return (
    <div className="form_container">
      <form>
        {/* Car Name */}
        <div className="row">
          <label>Car Name</label>

          <input type="text" ref={cardNameRef} placeholder="Enter car name" />
        </div>
        {/* Car Image URL */}
        <div className="row">
          <label>Car Image URL</label>
          <input
            type="url"
            ref={cardUrlRef}
            placeholder="Enter URL to car image"
          />
        </div>
        {/* Car Price */}
        <div className="row">
          <label>Car Price</label>
          <input
            type="number"
            ref={cardPriceRef}
            placeholder="Enter car price (e.g. 50000)"
          />
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
          <button onClick={clearForm} className="formbuttons" type="button">
            ➖ Clear Form
          </button>
          <button onClick={handleAddCard} className="formbuttons" type="button">
            ➕ Add Car
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
