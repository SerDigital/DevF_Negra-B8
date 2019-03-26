const Metric = require("../models/Metrics");

const createMetric = (data) =>{
    return Metric.create(data);
}

module.exports = {
    createMetric
};