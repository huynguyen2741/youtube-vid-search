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
    const userExist = await user.validateUserExist(username);
    if (userExist) {
        user = null;
        res.json({userExisted: true});
    }
    else {
        user.username = username
        user.password = password;
        await user.createUser();
        res.json(user);
    }

}

/* POST:validate the entered info and sign in the user
        check if user exist with same username
            yes -> check username and password -> return the user info
            no -> return and alert the user.
*/
exports.postSignIn = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    let try_user = new User(username, password);
    let user = new User();
    let result_data = {};
    const userExist = await user.validateUserExist(username);
    if (userExist) {
        result_data = await user.getUser(username);

        if (result_data.password === try_user.password) {
            result_data = {...result_data, correctUser: true}
            res.json(result_data);
        }
    }
    else {
        res.json({correctUser: false})
    }
}
