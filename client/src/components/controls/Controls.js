import "./Controls.css";

import { useRef } from "react";

function Controls({
  deleteAllCards,
  sortBy,
  setSortBy,
  electricOnly,
  setElectricOnly,
  setSearchName,
}) {
  const searchNameRef = useRef();

  function searchHandler() {
    setSearchName(searchNameRef.current.value);
  }

  function handleElectricOnly() {
    setElectricOnly(electricOnly === "yes" ? "no" : "yes");
  }

  function handleSortByPrice() {
    if (sortBy === "price") {
      setSortBy("");
    } else {
      setSortBy("price");
    }
  }

  function handleSortByName() {
    if (sortBy === "name") {
      setSortBy("");
    } else {
      setSortBy("name");
    }
  }

  return (
    <div className="center">
      <button onClick={deleteAllCards} className="controls">
        🗑 Delete All Cards
      </button>
      <button
        onClick={handleSortByPrice}
        className={`controls ${sortBy === "price" ? "active-control" : ""}`}
      >
        💰 Sort by Price
      </button>
      <button
        onClick={handleSortByName}
        className={`controls ${sortBy === "name" ? "active-control" : ""}`}
      >
        🔤 Sort by Name
      </button>
      <button
        onClick={handleElectricOnly}
        className={`controls ${electricOnly === "yes" ? "active-control" : ""}`}
      >
        ⚡️ Electric Only
      </button>
      <input
        className="searchBox"
        type="search"
        ref={searchNameRef}
        placeholder="Search by name..."
        onChange={searchHandler}
      />
    </div>
  );
}

export default Controls;
