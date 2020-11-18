const express = require('express');
const User = require('../models/User');


/* POST:create one user
        check if user exist with same username
            yes -> return the user existed.
            no -> insert the new user into the database.
*/
exports.postCreateUser = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    let user = new User();
    const validateResult = await user.validateUserExist(username, password);
    if (validateResult) {
        res.json({userExisted: true});
    }
    else {
        user.username = username
        user.password = password;
        const result = await user.createUser();
        // console.log(result);
        res.send(result);
    }

}

exports.getCreateUser = (req, res, next) => {
    res.send(req.body);
    return;
}