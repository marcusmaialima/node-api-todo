const moongose = require('mongoose');

// config dbURL this project
const dbURL = ''
const dbName = 'todo'

moongose.connect(dbURL, { dbName, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('Connected to database');
    } else {
        console.log(err);
    }
})

module.exports = moongose