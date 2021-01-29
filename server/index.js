const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const userRoute = require('./routes/userRoute');
const mongodb = require('./util/database').databaseConnect;


app.use(cors());
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })
app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));

app.use(userRoute);
// app.use((req, res, next) => {
//     console.log("hi");
// });
// app.get('/', (req, res, next) => {
//     res.send("hi");
// });

mongodb(() => {app.listen(5000)});
// app.listen(3001)