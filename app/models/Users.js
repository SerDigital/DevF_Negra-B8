const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for mongo
const UsersSchema = new Schema({
	app_id: String,
	user_id: String, 
	uuid: String,
	date: Date
});

module.exports = mongoose.model("users", UsersSchema);
