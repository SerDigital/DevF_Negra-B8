const express = require('express');
const { createEvent} = require("../controllers/Events");
const routes = express.Router();

router.post("/createevent", createEvent);


//Exporta el objeto de router.
module.exports = router;
