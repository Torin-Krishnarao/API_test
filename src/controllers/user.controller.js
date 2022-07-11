
const userService = require('../services/user.service');
const express = require('express');
const app = express();

// newUser function for POST Users route
const newUser = (req, res, next) => {
    //res.json({message: "Success"}); // dummy function for now

    const userResponse = userService.newUser();
    res.json(userResponse);
};

module.exports = {newUser};