import Card from "../models/Card.js";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/", (req, res) => {
  // Grab queries
  const electricOnly = req.query.electricOnly;
  const searchName = req.query.searchName;

  // Build query object for mongoose
  const query = {};
  if (electricOnly === "yes") {
    query.engine = "Electric";
  }
  if (searchName) {
    query.name = { $regex: searchName, $options: "i" };
  }

  // Search the MongoDB
  Card.find(query)
    .then((cards) => res.json(cards))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  // Grab car details from request body
  const { name, price, engine, url } = req.body;

  // Save the object to MongoDB
  const newCard = new Card({
    id: uuidv4(),
    name: name,
    price: price,
    engine: engine,
    url: url,
  });
  newCard
    .save()
    .then(() =>
      res.json({
        message: "Created card successfully",
      })
    )
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: "Error creating card",
      });
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  // Grab car id to delete
  var id = req.params.id;

  // Send mongodb request to delete
  Card.deleteOne({ id: id })
    .then(() =>
      res.json({
        message: "Deleted card successfully",
      })
    )
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: "Error deleting card",
      });
      console.log(err);
    });
});

router.patch("/:id", (req, res) => {
  // Grab card id to modify along with updated info
  var id = req.params.id;
  const { name, url, engine, price } = req.body;

  // Send request to mongodb to update
  Card.updateOne(
    { id: id },
    {
      name: name,
      price: price,
      engine: engine,
      url: url,
    }
  )
    .then(() =>
      res.json({
        message: "Updated card successfully",
      })
    )
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: "Error updating card",
      });
      console.log(err);
    });
});

export default router;
