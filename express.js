const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Our array of students
let students = ['Simon', 'Scott'];

// bodyParser to make it easy to read POST data
app.use(bodyParser.json())

// GET /students
app.get('/students', function (req, res) {
  // Send the user a list of students
  res.send(students);
})
// POST /students
app.post('/students', function (req, res) {
  // Add the new student to our array
  students.push(req.body.name)
  // Send the user a list of students
  res.send(students);
})

// Listening on our specified port
app.listen(port);
