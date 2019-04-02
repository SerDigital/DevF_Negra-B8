const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const {SECRET_KEY} = require("../config");

const tokenPrefix = "JWT";


// TODO: Complete the tokenization

const verifiToken = (token) => {
    if(!token) throw new Error("No token provided");

}






