const express = require('express');
const {createEvent} = require("../controllers/Events");

const router = express.Router();

//Create the route
router.post("/createevent", createEvent);


//Exporta el objeto de router.
module.exports = router;
