const express = require('express');


const { getAllUsersData } = require('./app/actions/userActions');



let num = getAllUsersData.length;



console.log('SS', num);
