
const eventsActions = require("./eventsActions");
const metricsActions = require("./metricsActions");
const reportMetric = require("./metricsActions");


module.exports = {

    //Que hace el operador ... Array/Object spread operator agrega las definiciones hechas en ...
    ...eventsActions,
    ...metricsActions,
    ...reportMetric
};
