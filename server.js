const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const config = require('./config');
const router = require('./network/routes');

db(config.dbUrl);
var server = express(); 
server.use(bodyParser.json());
router(server);
server.listen(4000); 
console.log('La aplicación esta escuchando en '+'http://localhost' +':'+4000);