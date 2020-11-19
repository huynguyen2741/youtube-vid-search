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

    /*
        Insert the user info into the datatbase.
    */
    createUser = async () => {
        try {
            db = await connection.getDatabase();
            if (db) {
                const collection = await db.collection('User');
                const result = await collection.insertOne(this);
                return;
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


    // retrieve user info from the database based on the username.
    getUser = async (username) => {
        db = await connection.getDatabase();
        const collection = await db.collection('User');
        const cursor = await collection.find({username: username});
        const user_data = await cursor.next();
        return (user_data);
    }

    // validate if there is account with same username.
    validateUserExist = async (username) => {
        let result = false;
        try {
            db = await connection.getDatabase();
            if (db) {
                const collection = await db.collection('User');
                const cursor = await collection.find({username: username});
                if (await cursor.count() > 0) {
                    console.log('User-validateUserExist: found');
                    result = true;
                }
                else {console.log('User-validateUserExist: NO');}
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