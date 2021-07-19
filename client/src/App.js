import "./App.css";

import {
  Route,
  HashRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./components/about/About";
import CardList from "./components/cardlist/CardList";
import Controls from "./components/controls/Controls";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import axios from "axios";

// Overall structure was inspired by: https://www.youtube.com/watch?v=hQAHSlTtcmY
// Header inspiration from: https://www.w3schools.com/howto/howto_css_style_header.asp

function App() {
  const [sortBy, setSortBy] = useState("");
  const [electricOnly, setElectricOnly] = useState("no");
  const [cards, setCards] = useState([]);
  const [searchName, setSearchName] = useState("");

  function getCards() {
    axios
      .get(`/api/cards`, {
        params: {
          electricOnly: electricOnly,
          searchName: searchName,
        },
      })
      .then((res) => {
        const fetchedCards = res.data;
        setCards(fetchedCards);
      });
  }

  useEffect(getCards, [electricOnly, searchName]);

  function deleteAllCards() {
    for (const x of cards) {
      deleteCard(x.id);
    }
  }

  function deleteCard(id) {
    axios.delete(`/api/cards/${id}`).then(() => {
      getCards();
    });
  }

  function addCard(name, url, engine, price) {
    var newCard = {
      name: name,
      url: url,
      engine: engine,
      price: price,
    };
    axios.post(`/api/cards/`, newCard).then(() => {
      getCards();
    });
  }

  const NavBarWithRouter = withRouter(NavBar);

  return (
    <>
      <Router basename="/">
        <Header />
        <NavBarWithRouter />
        <Switch>
          <Route exact path="/">
            <Form addCard={addCard} />
            <Controls
              deleteAllCards={deleteAllCards}
              sortBy={sortBy}
              setSortBy={setSortBy}
              electricOnly={electricOnly}
              setElectricOnly={setElectricOnly}
              setSearchName={setSearchName}
            />
            <CardList
              cards={cards}
              sortBy={sortBy}
              deleteCard={deleteCard}
              getCards={getCards}
              electricOnly={electricOnly}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
