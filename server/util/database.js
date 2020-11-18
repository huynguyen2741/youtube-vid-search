const mongodb = require('mongodb');

const client = mongodb.MongoClient;
let url = 'mongodb+srv://huynguyen2741:Lancier1007@cluster0-nyb3o.mongodb.net/test?retryWrites=true&w=majority';

let _database;

const databaseConnect = async (callback) => {
    try {
        const connection = await client.connect(url, {useUnifiedTopology: true});
        _database = connection.db('Video');
        console.log("connected");
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