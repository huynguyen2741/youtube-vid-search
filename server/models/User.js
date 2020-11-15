const express = require('express');
const connection = require('../util/database');
const db = connection.getDatabase();


class User {
    // constructor
    constructor(username, password) {
        let isValid = false;
        this.username = username;
        this.password = password;
    }

    // create new user into database
    createUser = async () => {
        try {
            if (db) {
                const collection = await db.connection('User');
                const result = collection.insertOne(this);
                console.log("success create");

                return 'Success';
            }
            else {
                return 'Fail to create the user';
            }
        }
        catch (e) {
            console.log(e);
            return;
        }

    }
}

module.exports = User;