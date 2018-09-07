var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;


/* exporting the todo.js file from Models */
module.exports.Todo = require("./todo");