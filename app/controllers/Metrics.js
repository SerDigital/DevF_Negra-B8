const { reportMetric, getAllDataMetrics } = require("../actions/metricsActions");

const createMetric = (req, res) => {   
    let totalRequest =  req.body.responseStart - req.body.requestStart;
    let totalResponse = req.body.responseEnd - req.body.responseStart;
    let totalRequestResponse = req.body.responseEnd - req.body.requestStart;
    let total = req.body.unloadEventEnd - req.body.connectStart;

    req.body.totalRequest = totalRequest;
    req.body.totalResponse = totalResponse;
    req.body.totalRequestResponse = totalRequestResponse;
    req.body.total = total;
    req.body.date =  Date.now();

    reportMetric(req.body).then((event) =>{
        res.status(201).json(event);
    }).catch(e=> res.status(400).json(e)); 
}

const getAllMetrics = (req, res) => {   

    getAllDataMetrics().then((metrics) => {
		return res.status(200).json(metrics);
	}).catch((e) => {
		return res.status(400).json(e);
});
}

const getMetrics = (req, res) => {
    
    console.log("getMetrics");
    console.log(req.body);
    res.status(200);
}


module.exports = {
    createMetric, 
    getAllMetrics, 
    getMetrics
};