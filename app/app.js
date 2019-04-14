
const express = require('express')
//const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const { db } = require("./config");
const router = require("./routes/index");

const app = express();
let port = 3000;

app.use(cors());

// app.use((req, res, next) => {
//     console.log('ESTO LLEGA')
//     console.log("Body app.js", res.body)
//     next()
// })
//Morgan es un LOG
//app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

// TODO: Verificar si el cliente lo envia en JSON, si es así comentar esta línea.
app.use(bodyParser.json());


//Agrega las opciones de las versiones del API
app.use("/api/v1",router);

mongoose.connect(db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
.once("open", () => console.log("Connected to database"));


app.listen(port, () => {
    console.log('Inicio por puerto ', port);
});