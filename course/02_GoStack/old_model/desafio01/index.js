const express = require('express');

const server = new express();

server.use(express.json());

const projects = [];
let reqs = 0;

// server.use((req, res, next) => {
//   reqs++;
//   console.time('Request');
//   console.log(`Requisição ${reqs}; Método: ${req.method}; URL: ${req.url};`);

//   next();

//   console.timeEnd('Request');
// });

function checkID(req, res, next) {
  const { id } = req.params;
  const projects = projects.find(p => p.id == id);

  if (!rproject) {
    return res.status(400).json({ error: 'ID não encontrado' });
  }

  return next();
}

function reqsCount(req, res, next) {
  reqs++;

  console.log(`Requests: ${reqs}`);

  return next();
}

server.get('/projects', reqsCount, (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);
});

server.put('/projects/:id', reqsCount, checkID, (req, res) => {
  const { id } = res.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

server.delete('/projects/:id', checkID, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.post('/projects/:id/tasks', checkID, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = proects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(4000);
