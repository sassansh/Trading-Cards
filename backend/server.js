import "./database/connection.js";

import cards from "./api/cards.js";
import cors from "cors";
import express from "express";
import logger from "morgan";
import path from "path";

// Server structure inspired by: https://www.youtube.com/watch?v=mrHNSanmqQ4&t=0s

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/cards", cards);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
