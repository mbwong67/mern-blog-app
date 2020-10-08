require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const methodOverride = require("method-override");
const homeRoute = require("./routes/homeRoute");
const blogRoute = require("./routes/blogRoute");
const authRoute = require("./routes/authRoute");
const app = express();

// Express setup
app.use(
  bodyParser.urlencoded({ extended: false }, { useUnifiedTopology: true })
);
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(cors());

// Routes
app.use("/", homeRoute);
app.use("/blogs", blogRoute);
app.use("/user", authRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server has started on", `https://localhost:${PORT}`);
});
