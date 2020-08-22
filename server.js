const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

mongoose.connect("mongodb://localhost/songs", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
