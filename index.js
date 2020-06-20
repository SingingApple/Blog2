const express = require("express");
const app = express();
const PostRoute = require("./routes/PostRoute");
const connectdb = require("./config/db");
const methodOverride = require("method-override");
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
connectdb();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/posts", PostRoute);
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
