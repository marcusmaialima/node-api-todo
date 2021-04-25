const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: String, required: true },
    checked: { type: Boolean, required: false, default: false },
    createAt: { type: Date, default: Date.now }
});

var toDo = mongoose.model('ToDo', TodoSchema);

module.exports = toDo
