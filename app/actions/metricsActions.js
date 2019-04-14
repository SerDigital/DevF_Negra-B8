const Metric = require("../models/Metrics");

const reportMetric = (data) =>{
    return Metric.create(data);
}

const getAllDataMetrics = () => {
    return Metric.find({});
}

module.exports = {
    reportMetric, 
    getAllDataMetrics
};