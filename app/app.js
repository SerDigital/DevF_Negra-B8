
const express = require('express')
//const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const { db } = require("./config");
const router = require("./routes/index");


const app = express();

//Morgan es un LOG
//app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
//app.use(bodyParser.json());
app.use(cors());

//Agrega las opciones de las versiones del API
app.use("/api/v1",router);

mongoose.connect(db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
.once("open", () => console.log("Connected to database"));


app.listen(5000, () => {
    console.log('Y aquí comienza todo, en este momento el puerto 5000 es el indicado')
})


