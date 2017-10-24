const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');
const endpoints = require('./endpoints');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

endpoints.buildEndPoints(app, controller);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server is listening on port ${port}.`) });
