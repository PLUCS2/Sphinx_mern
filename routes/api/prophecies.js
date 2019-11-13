const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Prophecy = require("../../models/Prophecy");
const validateProphecyInput = require("../../validation/prophecies");

router.get("/", (req, res) => {
  Prophecy.find()
    .sort({ date: -1 })
    .then(prophecies => res.json(prophecies))
    .catch(err => res.status(404).json({ nopropheciesfound: "No prophecies found" }));
});

router.get("/user/:user_id", (req, res) => {
  Prophecy.find({ user: req.params.user_id })
    .then(prophecies => res.json(prophecies))
    .catch(err =>
      res.status(404).json({ nopropheciesfound: "No prophecies found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Prophecy.findById(req.params.id)
    .then(prophecy => res.json(prophecy))
    .catch(err =>
      res.status(404).json({ noprophecyfound: "No prophecy found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    debugger; 
    const { errors, isValid } = validateProphecyInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newProphecy = new Prophecy({
      text: req.body.text,
      user: req.user.id
    });

    newProphecy.save().then(prophecy => res.json(prophecy));
  }
);

// router.get("/test", (req, res) => res.json({ msg: "This is the prophecies route" }));

module.exports = router;


