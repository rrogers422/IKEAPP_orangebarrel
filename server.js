const express = require('express');
const mysql = require('mysql');
require("dotenv").config();

const app = express();
//parse incoming req with json
app.use(express.json());