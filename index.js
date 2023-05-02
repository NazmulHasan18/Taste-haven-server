const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const chefs = require("./data/chefs.json");
const foods = require("./data/foods.json");
const reviews = require("./data/reviews.json");

app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
   res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
   const id = req.params.id;
   const chef = chefs.find((per) => per.id == id);

   res.send(chef);
});

app.get("/foods", (req, res) => {
   res.send(foods);
});
app.get("/reviews", (req, res) => {
   res.send(reviews);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
