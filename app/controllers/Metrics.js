const { reportMetric } = require("../actions");

const createMetric = (req, res) => {


    console.log("S");
    //console.log(req.body);

    reportMetric(req.body).then((event) =>{
        res.status(201).json(event);
    }).catch(e=> res.status(400).json(e));
}

module.exports = {
    createMetric
};

