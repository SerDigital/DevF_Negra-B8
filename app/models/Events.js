const mongoose = requiere("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema ({
    ubicacion: String, 
    user_id: String,
    recurso : String
});

module.exports = mongoose.model('events', EventsSchema);