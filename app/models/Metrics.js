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
    
    user_id: String, 
    element: String
});

module.exports = mongoose.model("metrics", MetricsSchema);

