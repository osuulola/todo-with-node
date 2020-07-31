require("./model");
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const handle = require("express-handlebars");

app = express();

const control = require("./controller");


app.use(bodyparser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "/views/"));

app.engine(
  "h",
  handle({
    extname: "h",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/",
  })
);

app.set("view engine", "h");

app.listen(3030, () => {
  console.log("Connection at port 3030");
});

app.use('/', control);