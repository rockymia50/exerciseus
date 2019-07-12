const express = require("express");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/exercises")
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(cors());

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
    { useNewUrlParser: true }
  
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is running");
});

// Add routes, both API and view
app.use('/exercises', exerciseRouter);
app.use('/users' , usersRouter)

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
