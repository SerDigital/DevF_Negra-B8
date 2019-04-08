const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {SECRET_KEY} = require("../config");
const {CreateUser, getUserByEmail} = require("./userActions");



//TODO: Create user authentification 
const login = ({ email, password }) => {

    // return new Promise((resolve, reject) => {
    //     getUserByEmail(email).then((user) => {
    //         bcrypt.compare(password, user.password, (err,isValid) => {
    //             if(err) reject(err);
    //             isValid ? resolve(createToken(user)) : reject(new Error("Password does not match")); 
    //         })
    //     });
    // });

};
