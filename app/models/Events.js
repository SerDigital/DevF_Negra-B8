const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema ({
    uuid: String, 
    instance: String,
    url : String
});

module.exports = mongoose.model('events', EventsSchema);