const { reportMetric } = require("../actions/metricsActions");

const createMetric = (req, res) => {
    //TODO: Verificar el problema del formato de la recepción del post.
   
    let totalRequest =  req.body.responseStart - req.body.requestStart;
    let totalResponse = req.body.responseEnd - req.body.responseStart;
    let totalRequestResponse = req.body.responseEnd - req.body.requestStart;
    let total = req.body.unloadEventEnd - req.body.connectStart;

    console.log("Times", req.body.requestStart , req.body.responseEnd)
    console.log("Total request" , totalRequest);

    req.body.totalRequest = totalRequest;
    req.body.totalResponse = totalResponse;
    req.body.totalRequestResponse = totalRequestResponse;
    req.body.total = total;
    req.body.date =  Date.now();

    reportMetric(req.body).then((event) =>{
        res.status(201).json(event);
    }).catch(e=> res.status(400).json(e)); 
}

module.exports = {
    createMetric
};