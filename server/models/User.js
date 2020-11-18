const express = require('express');
const connection = require('../util/database');
let db = null;


class User {
    // constructor
    constructor(username, password) {
        let isValid = false;
        this.username = username;
        this.password = password;
    }

    // insert new user into database
    // return what ?
    createUser = async () => {
        try {
            db = await connection.getDatabase();
            if (db) {
                const collection = await db.collection('User');
                const result = await collection.insertOne(this);
                // console.log("success create");
                const user = await this.getUser(this.username);
                return user;
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

    getUser = async (username) => {
        db = await connection.getDatabase();
        const collection = await db.collection('User');
        const cursor = await collection.find({username: username});
        return (cursor.next());
    }

    // validate if there is account with same username.
    validateUserExist = async (username, password) => {
        let result = false;
        try {
            db = await connection.getDatabase();
            if (db) {
                const collection = await db.collection('User');
                const cursor = await collection.find({username: username});
                if (await cursor.count() > 0) {
                    console.log('found');
                    result = true;
                }
                return result;
            }
            else {
                return 'Fail to connect to datatbase from user';
            }
        }
        catch (e) {
            console.log(e);
            return;
        }
    }
}
module.exports = User;