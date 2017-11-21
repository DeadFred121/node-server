const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Our array of students
let students = ['Simon', 'Scott'];

// Our array of todos
let tasks = [{id: 0, task: 'Do this', done: 'true'}];

// Current id default
let currentId = 0;

// bodyParser to make it easy to read POST data
app.use(bodyParser.json());

// GET /students
app.get('/students', function (req, res) {
  // Send the user a list of students
  res.send(students);
});

// GET /todos
app.get('/api/todos', function (req, res) {
  // Send the user a list of tasks
  res.send(tasks);
});

// GET /todos/id
app.get('/api/todos/:id', function (req, res) {
  // Filtering tasks by id
  res.send(tasks.filter((task) => {
    // Returning task by params.id
    return task.id === parseInt(req.params.id)
  }))
});

// POST /students
app.post('/students', function (req, res) {
  // Add the new student to our array
  students.push(req.body.name);
  // Send the user a list of students
  res.send(students);
});

// POST /todos
app.post('/todos', function (req, res) {
  // Defining newTask as an empty object, then assigning that to the request body
  let newTask = {};
  newTask = req.body;
  // Incrementing the newTask id by currentId +1, then pushing newTask to the tasks hash
  newTask.id = ++currentId;
  tasks.push(newTask);
  // Send the user a list of tasks
  res.send(tasks);
});

// PUT /todos
app.put('/api/todos/:id', (req,res) => {
  req.body.id = parseInt(req.params.id);
  tasks[req.params.id] = req.body
  res.send(tasks[req.params.id]);
});

// All other URLs will 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry, I can't find that!");
});

// Listening on our specified port
app.listen(port);
