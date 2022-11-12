const express = require('express');
const db = require('./db/db');
const route = require('./routes/routes');
cors = require('cors');


const app = express();
db();
app.use(cors());
app.use(express.json());

app.use('/' , route);

app.listen(3000 , console.log("port started successfully at osrt 3000"));