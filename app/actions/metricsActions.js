const Metric = require("../models/Metrics");

const reportMetric = (data) =>{
    return Metric.create(data);
}

module.exports = {
    reportMetric
};