const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({

	user_id: {
		type: String
	}
});

module.exports = mongoose.model("users", UsersSchema);