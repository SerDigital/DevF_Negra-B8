const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MetricsSchema = new Schema({
    event_id: String, 
    proceso: Number,
    carga: Number,
    respuesta: Number,
    solicitud: Number,
    tcp: Number,
    dns: Number
});

module.exports = mongoose.model("metrics", MetricsSchema);

