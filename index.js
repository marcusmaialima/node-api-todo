const PORT = 8080;
const express = require('express');
const cors = require('cors');
const routes = require('./config/routes');
require('./config/database');

var app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});