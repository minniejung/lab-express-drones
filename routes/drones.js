const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();
const Drones = require("../models/Drone.model");

// require the Drone model here

router.get("/", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drones.find()
    .then((dbResponse) => {
      // console.log("Database respones:", dbResponse);
      res.render("drones/list", {
        drones: dbResponse,
      });
    })
    .catch((e) => console.error(e));
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    await Drones.create(req.body);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drones.findById(req.params.id)
    .then((drone) =>
      res.render("drones/update-form", {
        droneToEdit: drone,
      })
    )
    .catch(next);
});

router.post("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body);
    console.log("Update: ");
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  console.log(req.params.id);
  try {
    await Drone.findByIdAndDelete(req.params.id);
    console.log("Delete: ");
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
