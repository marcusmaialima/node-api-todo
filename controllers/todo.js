const toDo = require('../models/todo');

module.exports = {
    createToDo(req, res) {

        const { title, description, createdBy } = req.body;

        var toDoAdd = new toDo({
            title: title,
            description: description,
            createdBy: createdBy
        })

        toDoAdd.save((err, todo) => {
            if (err) {
                res.status(500).json({ err })
            } else {
                res.status(200).json({
                    message: 'To-Do has been created',
                    todo
                })
            }
        })
    },
    toDoAll(req, res) {
        toDo.find({}, (err, toDos) => {
            if(err) {
                res.status(500).json({ err });
            } else {
                res.status(200).json({
                    message: 'All ToDos',
                    toDos
                })
            }
        })
    },
    oneToDo(req, res) {
        const { todo_id } = req.params;

        toDo.findById(todo_id, (err, toDo) => {
            if(err) {
                res.status(500).json({ err });
            } else {
                res.status(200).json({
                    message: 'One ToDo',
                    toDo
                })
            }
        })
    },
    updateToDo(req, res) {

        const { todo_id } = req.params;

        const { title, description, createdBy, checked } = req.body;

        toDo.findByIdAndUpdate(todo_id, {
            title: title,
            description: description,
            createdBy: createdBy,
            checked: checked
        }, (err, toDo) => {
            if(err) {
                res.status(500).json({ err });
            } else {
                res.status(200).json({
                    message: 'ToDo Update',
                    toDo
                })
            }
        })
    },
    removeToDo(req, res) {

        const { todo_id } = req.params;

        toDo.findByIdAndRemove(todo_id, (err, toDo) => {
            if(err) {
                res.status(500).json({ err });
            } else {
                res.status(200).json({
                    message: 'ToDo has been removed',
                    toDo
                })
            }
        })
    },
    removeTodos(req, res) {
        toDo.deleteMany({}, (err, toDo) => {
            if(err) {
                res.status(500).json({ err });
            } else {
                res.status(200).json({
                    message: 'All ToDo has been removed',
                    toDo
                })
            }
        });
    }
}