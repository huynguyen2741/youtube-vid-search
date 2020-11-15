const http = require('http');
const express = require('express');
// const cors = require('cors');

const app = express();

const userRoute = require('./routes/userRoute');
const mongodb = require('./util/database').databaseConnect;

// app.use(cors());

app.use(userRoute);
// app.use((req, res, next) => {
//     console.log("hi");
// });
app.get('/', (req, res, next) => {
    res.send("hi");
});
mongodb(() => {app.listen(5000)});
// app.listen(3001)