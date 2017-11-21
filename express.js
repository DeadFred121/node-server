const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Our array of students
let students = ['Simon', 'Scott'];

// Our array of todos
let todos = [{task: 'Do this', done: 'done'}, {task: 'Do that', done: 'done that'}, {task: 'Do everything', done: 'That is impossible, what are you, my mother?'}];

// bodyParser to make it easy to read POST data
app.use(bodyParser.json())

// GET /students
app.get('/students', function (req, res) {
  // Send the user a list of students
  res.send(students);
})

// GET /todos
app.get('/todos', function (req, res) {
  // Send the user a list of todos
  res.send(todos);
})
// POST /students
app.post('/students', function (req, res) {
  // Add the new student to our array
  students.push(req.body.name)
  // Send the user a list of students
  res.send(students);
})
// POST /todos
app.post('/todos', function (req, res) {
  // Add the new todo to our array
  todos.push(req.body)
  // Send the user a list of todos
  res.send(todos);
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry, I can't find that!")
})

// Listening on our specified port
app.listen(port);
