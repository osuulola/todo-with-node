const express = require("express");
var router = express.Router();
//controller codes below

const mongoose = require("mongoose");
var Todo = mongoose.model("Todo");

function getItems(req, res) {}

router.get("/", (req, res) => {
  Todo.find((err, doc) => {
    if (!err) {
      res.render("main", {
        title: "To Do List",
        item: doc,
        err: err,
      });
    } else console.log("error detected " + err);
  }).lean();
});

router.post("/", (req, res) => {
  var todo = new Todo();
  todo.item = req.body.item;
  todo.save((err, doc) => {
    if (!err) res.redirect(req.originalUrl);
    else console.log("an error ocurred " + err);
  });
});

router.put("/edit/:id", (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, doc) => {
      if (!err) {
        req.body.innerHTML = "<input type='text' value={{doc.item}}>";
      } else console.log("There is an error  " + err);
    }
  );
});

router.get("/delete/:id", (req, res) => {
  Todo.findByIdAndRemove(
    req.params.id,
    { useFindAndModify: false },
    (err, doc) => {
      if (!err) res.redirect(req.get("referer"));
      else console.log("an error occurred " + err);
    }
  );
});

module.exports = router;