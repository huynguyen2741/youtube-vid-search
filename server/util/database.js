const mongodb = require('mongodb');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const client = mongodb.MongoClient;
let url = `mongodb+srv://${username}:${password}@cluster0-nyb3o.mongodb.net/test?retryWrites=true&w=majority`;

let _database;

const databaseConnect = async (callback) => {
    try {
        const connection = await client.connect(url, {useUnifiedTopology: true});
        _database = connection.db('Video');
        console.log("connected to database");
        callback();
    }
    catch (e) {
        console.log(e);
        console.log('No network connected');
        // return;
    }
}


const getDatabase = () => {
    if (_database) {return _database;}
    else {console.log('Error: No database was selected/created')};
}

exports.getDatabase = getDatabase;
exports.databaseConnect = databaseConnect;