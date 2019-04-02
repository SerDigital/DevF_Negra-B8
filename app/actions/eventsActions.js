
const Event = require("../models/Events");

const reportEvent = (data) => {
    return Event.create(data);
}

module.exports = {
    reportEvent
};


