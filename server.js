const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/User");

const app = express();

// Setting up Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  expressSession({
    secret: "secretCode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));

// Routes
app.post("/login", (req, res) => {
  console.log(req.body);
});

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.get("/user", (req, res) => {
  console.log(req.body);
});

// Connect to Mongoose
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/loginapp", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Setting up Server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
