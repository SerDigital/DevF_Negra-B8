const eventsActions = require("./eventsActions");
const metricsActions = require("./metricsActions");

module.exports = {
    //Que hace ... Array/Object spread operator agrega las definiciones hechas en 
    ...eventsActions,
    ...metricsActions
};
