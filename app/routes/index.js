const express = require('express');
const {createUser} = require('../controllers/Users')

const {createEvent} = require("../controllers/Events");
const {createMetric}  = require("../controllers/Metrics");

const router = express.Router();

//Create the routes

//Users
router.post("/createuser", createUser);

//Events
router.post("/createevent", createEvent);

//Create Metric
router.post("/createmetric", createMetric);

//Exporta el objeto de router.
module.exports = router;
