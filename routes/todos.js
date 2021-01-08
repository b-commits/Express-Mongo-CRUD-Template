const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', (req, res) => {
  const todo = new Todo({
    comment: req.body.comment,
    isCompleted: 'false',
  });
  todo
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.delete('/:todoId', async (req, res) => {
  try {
    const removedTodo = await Todo.remove({ _id: req.params.todoId });
    res.json(removedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
