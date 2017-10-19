const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

// Shelf
app.post('/api/shelf', controller.createShelf);
app.get('/api/shelf/:id', controller.getShelf);
app.get('/api/shelf', controller.getShelves);
app.delete('/api/shelf/:id', controller.deleteShelf);

// Bin
app.get('/api/bin/:id', controller.getBin);
app.post('/api/bin', controller.createBin);
app.delete('/api/bin/:id', controller.deleteBin);
app.put('/api/bin/:id', controller.updateBin);


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server is listening on port ${port}.`) });
