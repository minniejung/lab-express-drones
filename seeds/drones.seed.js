// Iteration #1
require("dotenv").config();
require("../db/index.js");

const Drone = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

(async function createDrones() {
  try {
    await Drone.deleteMany();
    const createdDrones = await Drone.create(drones);
    console.log(`Number of created drones: ${createdDrones.length}`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
})();
