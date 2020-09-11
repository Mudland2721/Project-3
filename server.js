const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

// Express setup
const app = express();

// Setting up Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Connect to Mongoose
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/walkmanapp", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Setting up Server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
