const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  comment: String,
  isCompleted: String,
});

module.exports = mongoose.model('Todos', TodoSchema);
