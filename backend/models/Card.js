import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Card", cardSchema, "cards");
