const express = require('express');
const {createEvent} = require("../controllers/Events");
const {createMetric}  = require("../controllers/Metrics");

const isAuthenticated = require ("../middlewares/isAuthenticated");


const router = express.Router();

//Create the route
router.post("/createevent", createEvent);

router.post("/createmetric", createMetric);



//Authenticated ENDPOINT 
// router.post("/createevent", isAuthenticated, createEvent);


//Exporta el objeto de router.
module.exports = router;
