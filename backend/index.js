//imports
require("dotenv").config();
const connectDb = require("./db/db");
const express = require("express");
const cors = require("cors");
const app = express();

const comments = require("./routes/comments");

connectDb();

//Middleware
app.use(cors());
app.use(express.json()); //if a request comes in and not in JSON format; it will be rejected
app.use(`/api/comments`, comments);

//Starting a Server=it will listen for requests
const PORT = process.env.PORT || 5000; //like an address
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
