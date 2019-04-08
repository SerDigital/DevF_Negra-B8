const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for mongodb
const MetricsSchema = new Schema({
    connectEnd: Number,
    connectStart: Number,
    domComplete: Number,
    domContentLoadedEventEnd:Number,
    domContentLoadedEventStart: Number,
    domInteractive: Number,
    domLoading: Number,
    domainLookupEnd: Number,
    domainLookupStart: Number,
    fetchStart: Number,
    loadEventEnd: Number,
    loadEventStart: Number,
    navigationStart: Number,
    redirectEnd: Number,
    redirectStart: Number,
    requestStart: Number,
    responseEnd: Number,
    responseStart: Number,
    secureConnectionStart: Number,
    unloadEventEnd: Number,
    unloadEventStart: Number,  

    totalRequest: Number, 
    totalResponse: Number,
    totalRequestResponse: Number,
    total: Number,
    
    urlSite: String,
    uuid: String, 
    date: Date    
});

module.exports = mongoose.model("metrics", MetricsSchema);


//TODO: Verificar porque este modelo no se guarda, 
//de acuerdo al POST desde POSTMAN
