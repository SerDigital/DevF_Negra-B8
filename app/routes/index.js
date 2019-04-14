const express = require('express');
const {createUser, getAllUsers} = require('../controllers/Users')

const {createEvent} = require("../controllers/Events");
const {createMetric, getAllMetrics, getMetrics}  = require("../controllers/Metrics");


const router = express.Router();

//Create the routes

//Users

router.get("/getallusers", getAllUsers);

router.post("/createuser", createUser);

//Events
router.post("/createevent", createEvent);

//Create Metric
router.post("/createmetric", createMetric);
router.get("/getallmetrics", getAllMetrics);

router.get("/getmetrics/:id", getMetrics);


//Exporta el objeto de router.
module.exports = router;
