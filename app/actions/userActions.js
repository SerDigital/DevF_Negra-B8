const User = require('../models/Users');
const uuid = require('uuid/v4');

const newUser = (data) => {
    let user = data.body;
    user.uuid = uuid();
    user.date = Date.now();

    User.create(user);
    return (user);
}

module.exports = {
    newUser
 
};
