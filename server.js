const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");

// const db = mongoose.connection;

const app = express();

// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/songapp", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express Session Middleware

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
