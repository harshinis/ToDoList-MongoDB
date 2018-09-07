/* insteading of adding all routes in index.js main file with so many lines, creating a separate folder for routes */

var express = require('express');

/* allows us to break our routes out into modular chunks */

var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

router.route('/')
 .get(helpers.getTodos)
 .post(helpers.createTodo)
 
router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)
  
module.exports = router;
