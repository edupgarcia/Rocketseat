const express = require('express');
const cors = require('cors');

const {
  uuid,
  isUuid
} = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Métodos HTTP:
 *
 * GET:       Buscar informações do back-end
 * POST:      Criar informações no back-end
 * PUT/PATCH: Atualizar informações no back-end
 * DELETE:    Excluir informações no back-end
 */

/**
 * Tipos de parâmetros
 *
 * QUERY:         Filtros e pagunação (baseUrl?a=b&x=y)
 * ROUTE:         Identificar recursos para Atualizar/Deletar (baseUrl:a)
 * REQUEST BODY:  Conteúdo enviando ao Criar ou Atualizar (JSON)
 */

/**
 * Middleware:
 *
 * Interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição.
 */

const projects = [];

function logRequests(request, response, next) {
  const {
    method,
    url
  } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  //console.log(logLabel);
  //return next();

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const {
    id
  } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({
      error: "Invalid project ID"
    });
  }

  return next();
}

app.use(logRequests);
app.use("/projects/:id", validateProjectId);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World!"
  });
});

app.get("/projects", (request, response) => {
  // const query = request.query;
  // console.log(query);

  // const { title, owner } = request.query;
  // console.log(title);
  // console.log(owner);

  const {
    title
  } = request.query;

  const results = title ?
    projects.filter((project) => project.title.includes(title)) :
    projects;

  return response.json(results);
});

app.post("/projects", (request, response) => {
  // const body = request.body;
  // console.log(body);

  const {
    title,
    owner
  } = request.body;
  // console.log(title);
  // console.log(owner);

  // return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);

  const project = {
    id: uuid(),
    title,
    owner
  };
  projects.push(project);

  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  // const params = request.params;
  // console.log(params);

  const {
    id
  } = request.params;
  const {
    title,
    owner
  } = request.body;
  // console.log(id);

  // return response.json(["Projeto 4"]);

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({
      error: "Project not found"
    });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete("/projects/:id", (request, response) => {
  const {
    id
  } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({
      error: "Project not found"
    });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3000, () => {
  console.log("Back-end started!");
});