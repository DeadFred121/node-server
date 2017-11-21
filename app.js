const http = require('http');
const port = 3000;

let todos = [{task: 'Do this', done: 'done'}, {task: 'Do that', done: 'done that'}, {task: 'Do everything', done: 'That is impossible, what are you, my mother?'}];

function handleMyRequest (request, response) {
  if (request.url === '/api/todos' && request.method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(todos));
  } else if (request.url === '/api/teapot') {
    response.writeHead(418);
    response.end(`I'm a teapot!`);
  } else {
    response.writeHead(404);
    response.end();
  }

}

const server = http.createServer(handleMyRequest)


console.log(`Server is running on port ${port}`)
server.listen(port);
