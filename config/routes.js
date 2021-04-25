const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

// create todo
router.post('/api/create', todoController.createToDo);
// find all todos
router.get('/api/todos', todoController.toDoAll);
// find todo
router.get('/api/todo/:todo_id', todoController.oneToDo);
// update todo
router.put('/api/todo/:todo_id', todoController.updateToDo);
// delete todo
router.delete('/api/todo/:todo_id', todoController.removeToDo);
// delete all todo
router.delete('/api/todos/remove', todoController.removeTodos);

module.exports = router;