const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const userRoute = require('./routes/userRoute');
const mongodb = require('./util/database').databaseConnect;


app.use(cors());

app.use(express.json());


app.use(userRoute);


mongodb(() => {app.listen(5000)});
