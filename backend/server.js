const express = require('express');
const cors = require('cors');

require('dotenv').config();


const mongoose = require("mongoose");
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
  
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection is running");
})

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
