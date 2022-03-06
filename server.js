const express = require('express');
const mysql = require('mysql');
require("dotenv").config();

const app = express();
//parse incoming req with json
app.use(express.json());

//connection to database
const db = mysql.createConnection({
    host: process.env.DB_HOST, //localhost
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //password
    databsae: process.env.DB, //orangebarrel
});