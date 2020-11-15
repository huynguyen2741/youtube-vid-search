const express = require('express');

exports.postCreateUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body.username);

    const user = new User(username, password);

    user.createUser();
    res.redirect('/createuser1');
    return;
}

exports.getCreateUser = (req, res, next) => {
    // const username = req.body.username;
    // const password = req.body.password;

    // const user = new User(username, password);

    // user.createUser();
    res.send(req.body);
    return;
}