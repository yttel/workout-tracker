const express = require("express");

const router = express.Router();

const Workout = require("./models/Workout.js");

router.post("/api/workouts", ({ body }, res) => {
  const workout = new Workout(body);

  Workout.create(workout)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});