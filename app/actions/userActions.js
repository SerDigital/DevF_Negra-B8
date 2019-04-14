
const User = require('../models/Users');
const uuid = require('uuid/v4');

const newUser = (data) => {
    let user = data.body;
    user.uuid = uuid();
    user.date = Date.now();

    User.create(user);
    return (user);
}

const getAllUsersData = () => {
    return User.find({});
}

module.exports = {
    newUser,
    getAllUsersData
};